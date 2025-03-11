import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'engine-operation',
  standalone: false,
  imports: [CommonModule, FormsModule],
  templateUrl: './engineoperation.component.html',
  styleUrls: ['./engineoperation.component.css'],
})


export class EngineOperationComponent {
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

