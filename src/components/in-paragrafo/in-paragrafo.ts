import { Component, Input } from '@angular/core';

/**
 * Generated class for the InParagrafoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'in-paragrafo',
  templateUrl: 'in-paragrafo.html'
})
export class InParagrafoComponent {

  @Input('texto') text: string;
  valorInput: string;

  constructor() {
    
  }

}
