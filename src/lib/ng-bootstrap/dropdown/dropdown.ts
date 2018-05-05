import {
  forwardRef,
  Inject,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ContentChild,
  NgZone,
  Renderer2,
  OnInit,
  HostListener
} from '@angular/core';
import {EMPTY, of} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';

import {ViewPlatformService} from '../../common';
import {NgbDropdownConfig} from './dropdown-config';
import {PlacementArray, Placement, Positioning} from '../util/positioning';

/**
 */
@Directive({
  selector: '[ngbDropdownMenu]',
  host: {'[class.dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()', '[attr.x-placement]': 'placement'}
})
export class NgbDropdownMenu {
  placement: Placement = 'bottom';
  isOpen = false;

  constructor(
    @Inject(forwardRef(() => NgbDropdown)) public dropdown,
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _viewPlatform: ViewPlatformService,
    private _positioning: Positioning
  ) {}

  isEventFrom(eventTarget) { return this._viewPlatform.contains(this._elementRef.nativeElement, eventTarget); }

  position(triggerEl, placement) {
    this._positioning.positionElements(triggerEl, this._elementRef.nativeElement, placement)
      .subscribe((resolvedPlacement) => this.applyPlacement(resolvedPlacement));
  }

  applyPlacement(_placement: Placement) {
    const parentNode = this._renderer.parentNode(this._elementRef.nativeElement);
    // remove the current placement classes
    this._renderer.removeClass(parentNode, 'dropup');
    this._renderer.removeClass(parentNode, 'dropdown');
    this.placement = _placement;
    /**
     * apply the new placement
     * in case of top use up-arrow or down-arrow otherwise
     */
    if (_placement.search('^top') !== -1) {
      this._renderer.addClass(parentNode, 'dropup');
    } else {
      this._renderer.addClass(parentNode, 'dropdown');
    }
  }
}

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgbDropdownToggle directive. It plays the same role as NgbDropdownToggle but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
@Directive({
  selector: '[ngbDropdownAnchor]',
  host: {'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()'}
})
export class NgbDropdownAnchor {
  anchorEl;

  constructor(
    @Inject(forwardRef(() => NgbDropdown)) public dropdown,
    private _elementRef: ElementRef,
    private _viewPlatform: ViewPlatformService
  ) {
    this.anchorEl = _elementRef.nativeElement;
  }

  isEventFrom(eventTarget) { return this._viewPlatform.contains(this._elementRef.nativeElement, eventTarget); }
}

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
 * alternative.
 */
@Directive({
  selector: '[ngbDropdownToggle]',
  host: {
    'class': 'dropdown-toggle',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'dropdown.isOpen()',
    '(click)': 'toggleOpen()'
  },
  providers: [{provide: NgbDropdownAnchor, useExisting: forwardRef(() => NgbDropdownToggle)}]
})
export class NgbDropdownToggle extends NgbDropdownAnchor {
  constructor(
    @Inject(forwardRef(() => NgbDropdown)) dropdown,
    elementRef: ElementRef,
    viewPlatform: ViewPlatformService
  ) { super(dropdown, elementRef, viewPlatform); }

  toggleOpen() { this.dropdown.toggle(); }
}

/**
 * Transforms a node into a dropdown.
 */
@Directive({
  selector: '[ngbDropdown]',
  exportAs: 'ngbDropdown',
  host: {
    '[class.show]': 'isOpen()',
    '(keyup.esc)': 'closeFromOutsideEsc()'
  }
})
export class NgbDropdown implements OnInit {
  private _zoneSubscription: any;

  @ContentChild(NgbDropdownMenu) private _menu: NgbDropdownMenu;

  @ContentChild(NgbDropdownAnchor) private _anchor: NgbDropdownAnchor;

  /**
   * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
   * When it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.
   * When it is false dropdowns are never automatically closed.
   * When it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.
   * When it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks.
   */
  @Input() autoClose: boolean | 'outside' | 'inside';

  /**
   *  Defines whether or not the dropdown-menu is open initially.
   */
  @Input('open') _open = false;

  /**
   * Placement of a popover accepts:
   *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
   *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
   * and array of above values.
   */
  @Input() placement: PlacementArray;

  /**
   *  An event fired when the dropdown is opened or closed.
   *  Event's payload equals whether dropdown is open.
   */
  @Output() openChange = new EventEmitter();

  constructor(config: NgbDropdownConfig, ngZone: NgZone) {
    this.placement = config.placement;
    this.autoClose = config.autoClose;
    this._zoneSubscription = ngZone.onStable.subscribe(() => { this._positionMenu(); });
  }

  ngOnInit() {
    if (this._menu) {
      this._menu.applyPlacement(Array.isArray(this.placement) ? (this.placement[0]) : this.placement as Placement);
    }
  }

  /**
   * Checks if the dropdown menu is open or not.
   */
  isOpen(): boolean { return this._open; }

  /**
   * Opens the dropdown menu of a given navbar or tabbed navigation.
   */
  open(): void {
    if (!this._open) {
      this._open = true;
      this._positionMenu();
      this.openChange.emit(true);
    }
  }

  /**
   * Closes the dropdown menu of a given navbar or tabbed navigation.
   */
  close(): void {
    if (this._open) {
      this._open = false;
      this.openChange.emit(false);
    }
  }

  /**
   * Toggles the dropdown menu of a given navbar or tabbed navigation.
   */
  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  // FIXME: `eventTarget` always comes out as `undefined` on `platform-webworker`
  @HostListener('document:click', ['$event', '$event.target'])
  closeFromClick($event, targetElement) {
    console.log('NgbDropdown.closeFromClick() $event.target:', targetElement);
    if (this._open && this.autoClose && $event.button !== 2) {
      this._isEventFromToggle(targetElement).pipe(
        filter((isEventFromToggle) => !isEventFromToggle),
        switchMap(() => {
          if (this.autoClose === true) {
            return of(true);
          } else if (this.autoClose) {
            return this._isEventFromMenu(targetElement)
              .pipe(filter((isEventFromMenu) => {
                if (this.autoClose === 'inside' && isEventFromMenu) {
                  return true;
                } else if (this.autoClose === 'outside' && !isEventFromMenu) {
                  return true;
                }
                return false;
              }));
          }
          return EMPTY;
        }),
        tap(() => this.close())
      ).subscribe();
    }
  }

  closeFromOutsideEsc() {
    if (this.autoClose) {
      this.close();
    }
  }

  ngOnDestroy() { this._zoneSubscription.unsubscribe(); }

  private _isEventFromToggle(eventTarget) { return this._anchor.isEventFrom(eventTarget); }

  private _isEventFromMenu(eventTarget) { return this._menu ? this._menu.isEventFrom(eventTarget) : of(false); }

  private _positionMenu() {
    if (this.isOpen() && this._menu) {
      this._menu.position(this._anchor.anchorEl, this.placement);
    }
  }
}
