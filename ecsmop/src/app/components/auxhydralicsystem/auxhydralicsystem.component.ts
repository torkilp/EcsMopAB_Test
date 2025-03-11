import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'aux-hydralicsystem',
  templateUrl: './auxhydralicsystem.component.html',
  styleUrl: './auxhydralicsystem.component.css'
})
export class AuxHydralicSystemComponent implements OnInit {
  title = 'Alarm List';


  ngOnInit() {
    console.log('Hydralic System');
  }





}