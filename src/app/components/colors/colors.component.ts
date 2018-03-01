import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
const queryColors = gql `
  query{
  allColorses{
  id hexorrgba sassvar use
  }
  }`

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
data: {};
loading: boolean
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({query: queryColors})
      .valueChanges
      .subscribe(async({data, loading}) => {
        this.loading = loading;
        await data;
        this.data = data.allColorses;
        console.log('from colors', this.data);
      });
  }

}
