import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const queryButtons = gql `
query{
allButtons{
 html css
  }
}`

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  data: string;
  loading: boolean;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({query: queryButtons})
      .valueChanges
      .subscribe(async({ data, loading })   => {
        this.loading = loading;
        await data.allButtons;
        console.log('at buttons module', data.allButtons);
        this.data = data.allButtons;
      });
  }
}
