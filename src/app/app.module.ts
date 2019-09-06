import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernamesModule } from './modules/usernames/usernames.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './modules/usernames/chat/chat.component';

const appRoutes: Routes = [

  { path: 'chat',      component: ChatComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    AppRoutingModule,
    UsernamesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

