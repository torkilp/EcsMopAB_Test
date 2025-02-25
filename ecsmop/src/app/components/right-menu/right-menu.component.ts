import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  imports: [CommonModule]
})


export class RightMenuComponent implements OnInit {
  menuItems = ['Alarms', 'Engine', 'Operation', 'Status', 'Process Info', 'Process Adjustment', 'Chief Limiters', 'Auxiliaries', 'Maintenance', 'Admin'];
  selectedItem = this.menuItems[0];


  ngOnInit() {
    this.reduceWidth();
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }

  reduceWidth() {
    const elements = document.querySelectorAll('.operation, .status, .process-info, .process-adjustment, .chief-limits');
    elements.forEach((element) => {
      (element as HTMLElement).classList.add('reduced-width');
    });

    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach((button) => {
      (button as HTMLElement).classList.add('reduced-width-button');
    });
  }
}