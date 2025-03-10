import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'alarmlist',
  imports: [NgFor, NgIf],
  templateUrl: './alarmlist.component.html',
  styleUrl: './alarmlist.component.css'
})
export class AlarmChanneListComponent implements OnInit {
  title = 'Alarm Channel List';


  ngOnInit() {

  }





}