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
import { EngineNetworkStatusComponent } from './components/enginenetworkstatus/enginenetworkstatus.component';
import { EngineOperationComponent } from './components/engineoperation/engineoperation.component';
import { EngineStatusComponent } from './components/enginestatus/enginestatus.component';
import { EngineProcessInfoComponent } from './components/engineprocessinfo/engineprocessinfo.component';
import { AuxCylLubricationComponent } from './components/auxcyllubrication/auxcyllubrication.component';
import { AuxHydralicSystemComponent } from './components/auxhydralicsystem/auxhydralicsystem.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    RightMenuComponent,
    MainAreaComponent,
    AlarmListComponent,
    AlarmChanneListComponent,
    AlarmCutOutComponent,
    AlarmEventLogComponent,
    EngineNetworkStatusComponent,
    EngineOperationComponent,
    EngineStatusComponent,
    EngineProcessInfoComponent,
    AuxHydralicSystemComponent,
    AuxCylLubricationComponent,
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