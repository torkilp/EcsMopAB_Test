import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  standalone: false,
  selector: 'alarm-cutoutlist',
  templateUrl: './alarmcutoutlist.component.html',
  styleUrl: './alarmcutoutlist.component.css'
})
export class AlarmCutOutComponent implements OnInit {
  title = 'Alarm Channel List';


  ngOnInit() {
    console.log('Alarm Cut Out List');
  }





}