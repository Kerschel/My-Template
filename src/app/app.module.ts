import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer'; 

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { ContactComponent } from './contact/contact.component';
import { ApisComponent } from './apis/apis.component';


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'resume',component:PdfViewComponent},
  {path:'contact',component:ContactComponent},
  {path:'api',component:ApisComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PdfViewComponent,
    ContactComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    PdfViewerModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
