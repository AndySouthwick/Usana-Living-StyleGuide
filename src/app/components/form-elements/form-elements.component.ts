import { Component, OnInit } from '@angular/core';
import {formElementData} from '../../component-data/form-element-data';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  formElementData: {};
  constructor() { }

  ngOnInit() {
console.log('from form elements c', formElementData[0])
    this.formElementData = formElementData;
  }
}
