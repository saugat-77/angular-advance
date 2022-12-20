import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoModule} from './forms/todo/todo.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './forms/todo/store/todo.reducer';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './components/header/header.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http-interceptor';

export const httpInceptorProvider =[
  {provider:HTTP_INTERCEPTORS, useClass:AppHttpInterceptor, multi:true},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({todoState: todoReducer}),
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    TodoModule,
    MatToolbarModule,
  ],
  providers: [httpInceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  HeaderComponent

}