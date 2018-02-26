import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { button as buttonFromLocal } from '../../pages/component-data/button-data';

// const queryButtons = gql `
// query{
// allButtons{
//  html css
//   }
// }`

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  data: {};
  loading: boolean;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.data = buttonFromLocal;
    //   console.log(buttonFromLocal[0])
    //   this.apollo.watchQuery<any>({query: queryButtons})
    //     .valueChanges
    //     .subscribe(async({ data, loading })   => {
    //       this.loading = loading;
    //       await data.allButtons;
    //       const tesObj = Object.assign({}, data.allButtons[0], buttonFromLocal[0])
    //       console.log('testObj', tesObj)
    //       console.log('at buttons module', data.allButtons);
    //       this.data = data.allButtons;
    //     });
    // }
  }
}
