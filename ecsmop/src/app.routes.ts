import { Routes } from '@angular/router';
import { MainAreaComponent } from './app/components/main-area/main-area.component';
import { AlarmListComponent } from './app/components/alarmlist/alarmlist.component';
import { AlarmChanneListComponent } from './app/components/alarmchannellist/alarmchannellist.component';
import { AlarmCutOutComponent } from './app/components/alarmcutoutlist/alarmcutoutlist.component';


export const ecsmop_routes: Routes = [
    { path: '', redirectTo: '/app-main-area', pathMatch: 'full' },
    { path: 'app-main-area', component: MainAreaComponent },
    { path: 'alarm-list', component: AlarmListComponent },
    { path: 'alarm-channellist', component: AlarmChanneListComponent },
    { path: 'alarm-cutoutlist', component: AlarmCutOutComponent },
];
