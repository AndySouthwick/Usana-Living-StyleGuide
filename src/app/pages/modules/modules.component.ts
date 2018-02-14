import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {button} from '../component-data/button-data';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query = gql `
query{
allButtons{
    id html css
  }}
`

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  module: string;
  moduleData: {};
  snippetData: {};
  loading: boolean;
  constructor(private route: ActivatedRoute, private apollo: Apollo) {}
  moduleSelect = () => {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('id in constructor', id);
      switch (id) {
      case 'button':
        this.apollo.watchQuery<any>({
          query: query
        })
          .valueChanges
          .subscribe(async({ data, loading })   => {
            this.loading = loading;
            await data.allButtons[0].html;
            console.log(data.allButtons[0].html);
            this.moduleData = data.allButtons[0].html;
            this.snippetData = data.allButtons[0];
          });
      // this.moduleSelect();
      break
      default:
        this.moduleData = '';
    }
    });
      }

   ngOnInit() {
     this.moduleSelect();
   }
}
