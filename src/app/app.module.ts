import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { IconographyComponent } from './pages/iconography/iconography.component';
import { TypeographyComponent } from './pages/typeography/typeography.component';
import { DesignelementsComponent } from './pages/designelements/designelements.component';
import { MastersassComponent } from './pages/mastersass/mastersass.component';
import { TopNavigationComponent } from './components/app-components/top-navigation/top-navigation.component';
import { CodeSnippetsComponent } from './components/app-components/code-snippets/code-snippets.component';
import { SidebarComponent } from './components/app-components/sidebar/sidebar.component';
import { UniversalFooterComponent } from './components/universal-footer/universal-footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ModuleDisplayComponent } from './components/app-components/module-display/module-display.component';



const appRoutes: Routes = [
  {path: 'angular-modules', component: ModulesComponent},
  {path: 'angular-modules/:id', component: ModulesComponent},
  {path: 'iconography', component: IconographyComponent},
  {path: 'typography', component: TypeographyComponent},
  {path: 'design-elements', component: DesignelementsComponent},
  {path: 'master-sass', component: MastersassComponent},
]
@NgModule({
  declarations: [
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
    ModuleDisplayComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
