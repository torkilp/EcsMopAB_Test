import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-area',
  standalone: true,
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],
  imports: [FormsModule, CommonModule]
})


export class MainAreaComponent {
  meters = [
    { name: 'Start Air', min: 0, max: 30, value: 10 },
    { name: 'Inlet Oil', min: 0, max: 4, value: 2 },
    { name: 'Hyd. Oil', min: 150, max: 250, value: 200 },
    { name: 'Scav. Air', min: 0, max: 3, value: 1 }
  ];

  speedRPM = 1000;
  fuelIndex = 50;

  states = [
    { label: 'Main State', value: 'Running' },
    { label: 'Command', value: 'Start' },
    { label: 'Engine Mode', value: 'Auto' },
    { label: 'Governor Mode', value: 'Manual' }
  ];

  hpsState = 'Active';
  auxBlowersState = 'On';
}

