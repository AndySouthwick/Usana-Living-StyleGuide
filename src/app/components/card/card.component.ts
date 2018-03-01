import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {cardData} from '../../component-data/card-data';
const queryCard = gql `
query{
allCards{
image text1 text2 linkText target linkUrl html css
  }
}`

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardsSnippetData: {};
  data: {};
  loading: boolean;
  image: string;
  text1: string;
  text2: string;
  linkText: string;
  target: string;
  linkUrl: string;
  html: string;
  css: string;

  constructor( private apollo: Apollo) {}

  ngOnInit() {
    this.cardsSnippetData = cardData;
    this.apollo.watchQuery<any>({query: queryCard})
      .valueChanges
      .subscribe(async({data, loading}) => {
        this.loading = loading;
        await data.allCards
        this.data = data.allCards[0];
        console.log(data.allCards);
      });
  }

}
