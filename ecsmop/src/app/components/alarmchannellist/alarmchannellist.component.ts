import { Component, OnInit } from '@angular/core';
import { Alarm } from '../../entities/alarm';





@Component({
  selector: 'alarm-channellist',
  templateUrl: './alarmchannellist.component.html',
  styleUrl: './alarmchannellist.component.css'
})
export class AlarmChanneListComponent implements OnInit {
  title = 'Alarm Channel List';

  channellist: Array<Alarm> = new Array<Alarm>();

  constructor() { }

  ngOnInit() {
    this.initData();
  }

  initData(): void {

    this.channellist.push(Object.assign(new Alarm(), { id: "PW_USED", date: "24-01-31", time: "15:40:20:0", description: "Service engineer paasword been used", status: "Alarm" }));
    this.channellist.push(Object.assign(new Alarm(), { id: "WDOG_ENABLED", date: "24-01-31", time: "15:41:20:0", description: "Watch dog enabled", status: "Event" }));
    this.channellist.push(Object.assign(new Alarm(), { id: "WDOG_PROG_U_START", date: "24-01-31", time: "15:42:20:0", description: "Clock server started", status: "Event" }));

  }





}