import { Component, OnInit } from '@angular/core';
import { heroVideoData } from '../../component-data/hero-video-data';

@Component({
  selector: 'app-hero-video',
  templateUrl: './hero-video.component.html',
  styleUrls: ['./hero-video.component.scss']
})
export class HeroVideoComponent implements OnInit {
  heroVideoSnippetsData: {};
  constructor() { }

  ngOnInit() {
    this.heroVideoSnippetsData = heroVideoData;
  }

}
