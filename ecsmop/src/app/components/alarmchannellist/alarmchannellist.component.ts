import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  standalone: true,
  selector: 'app-network',
  imports: [NgFor, NgIf],
  templateUrl: './alarmchannellist.component.html',
  styleUrl: './alarmchannellist.component.css'
})
export class AlarmChanneListComponent implements OnInit {
  title = 'Alarm Channel List';


  ngOnInit() {

  }





}