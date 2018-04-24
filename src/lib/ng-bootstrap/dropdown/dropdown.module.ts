import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu} from './dropdown';
import {NgbDropdownConfig} from './dropdown-config';
import {Positioning} from '../util/positioning';

export {NgbDropdown, NgbDropdownToggle, NgbDropdownMenu} from './dropdown';
export {NgbDropdownConfig} from './dropdown-config';
export {Positioning} from '../util/positioning';

const NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu];

@NgModule({declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES})
export class NgbDropdownModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbDropdownModule, providers: [NgbDropdownConfig, Positioning]}; }
}
