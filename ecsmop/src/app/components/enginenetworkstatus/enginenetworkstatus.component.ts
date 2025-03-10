import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'engine-networkstatus',
  imports: [NgFor, NgIf],
  templateUrl: './enginenetworkstatus.component.html',
  styleUrl: './enginenetworkstatus.component.css'
})
export class EngineNetworkStatusComponent implements OnInit {
  title = 'Network Status';


  ngOnInit() {

  }





}