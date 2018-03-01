import { Component, OnInit } from '@angular/core';
import {heroData} from '../../component-data/hero-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroSnippetsData: {}
  constructor() { }

  ngOnInit() {
    this.heroSnippetsData = heroData;
    console.log(heroData);
  }

}
