import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeography',
  templateUrl: './typeography.component.html',
  styleUrls: ['./typeography.component.scss']
})
export class TypeographyComponent implements OnInit {
data: {};


  constructor() { }
  ngOnInit() {
    this.data = {
      title: 'Typography',
      description: 'Typography is the primary way that users digest content and accomplish work.'

    };
  }

}
