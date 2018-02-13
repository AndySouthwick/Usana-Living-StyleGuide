import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-module-display',
  templateUrl: './module-display.component.html',
  styleUrls: ['./module-display.component.css']
})
export class ModuleDisplayComponent implements OnInit {
  @Input() data: {};
  constructor() { }

  ngOnInit() {
  }

}
