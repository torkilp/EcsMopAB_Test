import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { StatusBarComponent } from './components//status-bar/status-bar.component';
import { RightMenuComponent } from './components//right-menu/right-menu.component';
import { MainAreaComponent } from './components//main-area/main-area.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    RightMenuComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }