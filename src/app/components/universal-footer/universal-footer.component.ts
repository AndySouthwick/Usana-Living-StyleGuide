import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {ActivatedRoute} from '@angular/router';
const queryFooter = gql `
query{
allFooters{
    emailText
    followText
    disclaimer1
    disclaimer2
    disclaimer3
    disclaimer4
    copyright
    html
    css
    socialMedias{
    name url
    }
    legals{
    name url target
    }
    companyLinkses{
         name
        localLinkses{
            url name target
         }
    }
  }
}`
@Component({
  selector: 'app-universal-footer',
  templateUrl: './universal-footer.component.html',
  styleUrls: ['./universal-footer.component.scss']
})
export class UniversalFooterComponent implements OnInit {
  public isCollapsed = [];
  page: string;
  data: {};
  loading: boolean;
  constructor( private apollo: Apollo, private route: ActivatedRoute) {}
  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.page = id;
      console.log('id in constructor', id);
    });

  this.apollo.watchQuery<any>({query: queryFooter})
    .valueChanges
    .subscribe(async({ data, loading })   => {
      this.loading = loading;
      await data.allFooters;
      console.log(data.allFooters);
      this.data = data.allFooters[0];
});
  }

}
