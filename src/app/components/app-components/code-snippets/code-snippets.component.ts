import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippets',
  templateUrl: './code-snippets.component.html',
  styleUrls: ['./code-snippets.component.css']
})
export class CodeSnippetsComponent implements OnInit {
  @Input() data: {};
  constructor() { }

  ngOnInit() {
  }

}
