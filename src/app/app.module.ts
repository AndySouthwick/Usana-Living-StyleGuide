import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { IconographyComponent } from './components/iconography/iconography.component';
import { TypeographyComponent } from './pages/typeography/typeography.component';
import { DesignelementsComponent } from './pages/designelements/designelements.component';
import { MastersassComponent } from './pages/mastersass/mastersass.component';
import { TopNavigationComponent } from './components/app-components/top-navigation/top-navigation.component';
import { CodeSnippetsComponent } from './components/app-components/code-snippets/code-snippets.component';
import { SidebarComponent } from './components/app-components/sidebar/sidebar.component';
import { UniversalFooterComponent } from './components/universal-footer/universal-footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { CardComponent } from './components/card/card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormComponent } from './components/form/form.component';
import { JumbotronComponent } from './components/app-components/jumbotron/jumbotron.component';
import { AppFooterComponent } from './components/app-components/app-footer/app-footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroVideoComponent } from './components/hero-video/hero-video.component';
import { TwoColLayoutComponent } from './components/app-components/two-col-layout/two-col-layout.component';
import { ColorsComponent } from './components/colors/colors.component';
import { TypeComponent } from './components/type/type.component';
import { FooterDisplayComponent } from './components/footer-display/footer-display.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { HomeComponent } from './pages/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular-modules', component: ModulesComponent},
  {path: 'angular-modules/:id', component: ModulesComponent},
  {path: 'design-elements', component: DesignelementsComponent},
  {path: 'design-elements/:id', component: DesignelementsComponent},
]
@NgModule({
  declarations: [
    TopNavigationComponent,
    AppComponent,
    ModulesComponent,
    IconographyComponent,
    TypeographyComponent,
    DesignelementsComponent,
    MastersassComponent,
    TopNavigationComponent,
    CodeSnippetsComponent,
    SidebarComponent,
    UniversalFooterComponent,
    ButtonComponent,
    CardComponent,
    FormComponent,
    JumbotronComponent,
    AppFooterComponent,
    HeroComponent,
    HeroVideoComponent,
    TwoColLayoutComponent,
    ColorsComponent,
    TypeComponent,
    FooterDisplayComponent,
    HomeComponent,
    TabsComponent,
    FormElementsComponent,
    TooltipComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    NgbModule.forRoot(),
    BrowserModule,
    HighlightJsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/cjdm8lgrv37400140p7d786pe' }),
      cache: new InMemoryCache()
    });
  }
}
