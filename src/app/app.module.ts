import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { SelectmultipleComponent } from './selectmultiple/selectmultiple.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectmultipleComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
