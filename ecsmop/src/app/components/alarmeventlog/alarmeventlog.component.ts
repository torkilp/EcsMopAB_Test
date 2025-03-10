import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'alarm-eventlog',
  imports: [NgFor, NgIf],
  templateUrl: './alarmeventlog.component.html',
  styleUrl: './alarmeventlog.component.css'
})
export class AlarmEventLogComponent implements OnInit {
  title = 'Alarm Channel List';


  ngOnInit() {

  }





}