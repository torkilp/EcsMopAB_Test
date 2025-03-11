import { Routes } from '@angular/router';
import { MainAreaComponent } from './app/components/main-area/main-area.component';
import { AlarmListComponent } from './app/components/alarmlist/alarmlist.component';
import { AlarmChanneListComponent } from './app/components/alarmchannellist/alarmchannellist.component';
import { AlarmCutOutComponent } from './app/components/alarmcutoutlist/alarmcutoutlist.component';
import { AlarmEventLogComponent } from './app/components/alarmeventlog/alarmeventlog.component';
import { EngineProcessInfoComponent } from './app/components/engineprocessinfo/engineprocessinfo.component';
import { EngineNetworkStatusComponent } from './app/components/enginenetworkstatus/enginenetworkstatus.component';
import { EngineOperationComponent } from './app/components/engineoperation/engineoperation.component';


export const ecsmop_routes: Routes = [
    { path: '', redirectTo: '/app-main-area', pathMatch: 'full' },
    { path: 'app-main-area', component: MainAreaComponent },
    { path: 'alarm-list', component: AlarmListComponent },
    { path: 'alarm-eventlog', component: AlarmEventLogComponent },
    { path: 'alarm-channellist', component: AlarmChanneListComponent },
    { path: 'alarm-cutoutlist', component: AlarmCutOutComponent },
    { path: 'engine-operation', component: EngineOperationComponent },
    { path: 'engine-status', component: EngineProcessInfoComponent },
    { path: 'engine-processinfo', component: EngineProcessInfoComponent },
    { path: 'engine-networkstatus', component: EngineNetworkStatusComponent },
];
