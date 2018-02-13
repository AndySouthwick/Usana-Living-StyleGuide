import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {button} from '../component-data/button-data';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  module: string;
  moduleData: {};
  snippetData: {};
  constructor(private route: ActivatedRoute) { }
  moduleSelect = () => {
    const id = this.route.params._value.id;
    switch (id) {
      case 'button':
        this.moduleData = button
        this.snippetData = button
      break;
      default:
        this.moduleData = '';
    }
      console.log(id);
      }

  ngOnInit(): void {
    this.moduleSelect();
  }

}
