import { Routes } from '@angular/router';
import { MainAreaComponent } from './app/components/main-area/main-area.component';
import { AlarmListComponent } from './app/components/alarmlist/alarmlist.component';
import { AlarmChanneListComponent } from './app/components/alarmchannellist/alarmchannellist.component';
import { AlarmCutOutComponent } from './app/components/alarmcutoutlist/alarmcutoutlist.component';
import { AlarmEventLogComponent } from './app/components/alarmeventlog/alarmeventlog.component';
import { EngineProcessInfoComponent } from './app/components/engineprocessinfo/engineprocessinfo.component';
import { EngineNetworkStatusComponent } from './app/components/enginenetworkstatus/enginenetworkstatus.component';
import { EngineOperationComponent } from './app/components/engineoperation/engineoperation.component';
import { AuxScavengAirComponent } from './app/components/auxscavengeair/auxscavengair.component';
import { AuxSecondFuelSystemComponent } from './app/components/auxsecoundfuelsystem/auxsecondfuelsystem.component';
import { AuxHydralicSystemComponent } from './app/components/auxhydralicsystem/auxhydralicsystem.component';
import { EngineStatusComponent } from './app/components/enginestatus/enginestatus.component';
import { AdminAboutComponent } from './app/components/adminabout/adminabout.component';
import { AdminUpdateComponent } from './app/components/adminupdate/adminupdate.component';
import { AdminLicenseComponent } from './app/components/adminlicense/adminlicense.component';
import { AdminSetTimeComponent } from './app/components/adminsettime/adminsettime.component';


export const ecsmop_routes: Routes = [
    { path: '', redirectTo: '/app-main-area', pathMatch: 'full' },
    { path: 'app-main-area', component: MainAreaComponent },
    { path: 'alarm-list', component: AlarmListComponent },
    { path: 'alarm-eventlog', component: AlarmEventLogComponent },
    { path: 'alarm-channellist', component: AlarmChanneListComponent },
    { path: 'alarm-cutoutlist', component: AlarmCutOutComponent },
    { path: 'engine-operation', component: EngineOperationComponent },
    { path: 'engine-status', component: EngineStatusComponent },
    { path: 'engine-processinfo', component: EngineProcessInfoComponent },
    { path: 'engine-networkstatus', component: EngineNetworkStatusComponent },
    { path: 'aux-scavengair', component: AuxScavengAirComponent },
    { path: 'aux-secondfuelsystem', component: AuxSecondFuelSystemComponent },
    { path: 'aux-hydralicsystem', component: AuxHydralicSystemComponent },
    { path: 'admin-about', component: AdminAboutComponent },
    { path: 'admin-update', component: AdminUpdateComponent },
    { path: 'admin-license', component: AdminLicenseComponent },
    { path: 'admin-settime', component: AdminSetTimeComponent },
];
