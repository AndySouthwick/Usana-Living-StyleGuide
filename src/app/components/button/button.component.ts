import { Component, OnInit } from '@angular/core';
import { button as buttonFromLocal } from '../../component-data/button-data';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  data: {};
  loading: boolean;

  constructor() {
  }

  ngOnInit() {
    this.data = buttonFromLocal;

  }
}
