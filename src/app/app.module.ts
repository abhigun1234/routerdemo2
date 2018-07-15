import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component'
import {RouterModule} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    PagenotfoundComponent,
    EmplistComponent,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path :'home',component:HomeComponent}
  ,{path:'aboutus',component:AboutComponent,
},{path:'empdetails',component:EmpdetailsComponent,
},{path:'emplist',component:EmplistComponent,
}
 
  , {path:'',component:HomeComponent},
  {path:'**',component:PagenotfoundComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
