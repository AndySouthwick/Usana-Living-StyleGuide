import { Component, OnInit } from '@angular/core';
import {footerData} from '../../component-data/footer-data';

@Component({
  selector: 'app-footer-display',
  templateUrl: './footer-display.component.html',
  styleUrls: ['./footer-display.component.scss']
})
export class FooterDisplayComponent implements OnInit {
footerSnippetData: {};
  constructor() { }

  ngOnInit() {
    this.footerSnippetData = footerData;
  }

}
