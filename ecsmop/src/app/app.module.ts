import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { StatusBarComponent } from './components//status-bar/status-bar.component';
import { RightMenuComponent } from './components//right-menu/right-menu.component';
import { MainAreaComponent } from './components//main-area/main-area.component';
import { FormsModule } from '@angular/forms';
import { AlarmListComponent } from './components/alarmlist/alarmlist.component';
import { AlarmChanneListComponent } from './components/alarmchannellist/alarmchannellist.component';
import { AlarmCutOutComponent } from './components/alarmcutoutlist/alarmcutoutlist.component';
import { AlarmEventLogComponent } from './components/alarmeventlog/alarmeventlog.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    RightMenuComponent,
    MainAreaComponent,
    AlarmListComponent,
    AlarmChanneListComponent,
    AlarmCutOutComponent,
    AlarmEventLogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ACCOUNT_ROUTES)
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }