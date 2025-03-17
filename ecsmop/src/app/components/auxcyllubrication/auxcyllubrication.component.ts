import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'aux-auxcyllubrication',
  templateUrl: './auxcyllubrication.component.html',
  styleUrl: './auxcyllubrication.component.css'
})
export class AuxCylLubricationComponent implements OnInit {
  title = 'Alarm List';


  ngOnInit() {
    console.log('Hydralic System');
  }





}