import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'aux-secondfuelsystem',
  templateUrl: './auxsecondfuelsystem.component.html',
  styleUrl: './auxsecondfuelsystem.component.css'
})
export class AuxSecondFuelSystemComponent implements OnInit {
  title = 'Alarm List';


  ngOnInit() {
    console.log('Hydralic System');
  }





}