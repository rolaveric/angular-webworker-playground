import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-angular',
  templateUrl: './angular.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .dropzone {
      padding: 50px;
      border: 3px solid black;
    }
  `]
})
export class AngularComponent {

  htmlString = 'String with some <strong>markup</strong> in the <em>middle</em>';

  myContext = {$implicit: 'World', localSk: 'Svet'};

  showMouseOverBorder = false;

  mousedOver() {
    this.showMouseOverBorder = true;
  }

  mouseLeft() {
    this.showMouseOverBorder = false;
  }

  dragStart($event) {
    console.log('dragstart', $event);
    $event.dataTransfer.setData('text/plain', 'drag data');
    $event.dataTransfer.dropEffect = 'copy';
  }

  dragEnd($event) {
    console.log('dragend', $event);
  }

  dragEnter($event) {
    console.log('dragenter', $event);
  }

  dragLeave($event) {
    console.log('dragleave', $event);
  }

  dragOver($event) {
    console.log('dragover', $event);
    $event.preventDefault();
  }

  dragExit($event) {
    console.log('dragexit', $event);
  }

  drop($event) {
    console.log('drop', $event);
    $event.preventDefault();
  }
}
