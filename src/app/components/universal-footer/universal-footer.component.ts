import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
  data: string;
  loading: boolean;
  constructor( private apollo: Apollo) {}
  ngOnInit() {
  this.apollo.watchQuery<any>({query: queryFooter})
    .valueChanges
    .subscribe(async({ data, loading })   => {
      this.loading = loading;
      await data.allFooters;
      console.log(data.allFooters);
      this.data = data.allFooters;
      console.log( data.allFooters[0].companyLinkses[0]);
    });
  }

}
