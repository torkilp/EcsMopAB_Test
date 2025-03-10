import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'engine-status',
  imports: [NgFor, NgIf],
  templateUrl: './engineprocessinfo.component.html',
  styleUrl: './engineprocessinfo.component.css'
})
export class EngineProcessInfoComponent implements OnInit {
  title = 'Network Status';


  ngOnInit() {

  }





}