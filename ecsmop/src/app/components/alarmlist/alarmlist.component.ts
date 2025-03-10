import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'alarm-list',
  templateUrl: './alarmlist.component.html',
  styleUrl: './alarmlist.component.css'
})
export class AlarmListComponent implements OnInit {
  title = 'Alarm List';


  ngOnInit() {
    console.log('Alarm Channel List');
  }





}