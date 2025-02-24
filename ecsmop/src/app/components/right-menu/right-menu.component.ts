import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  imports: [CommonModule]   
})


export class RightMenuComponent {
  menuItems = ['Alarms', 'Engine', 'Operation', 'Status', 'Process Info', 'Process Adjustment', 'Chief Limiters', 'Auxiliaries', 'Maintenance', 'Admin'];
  selectedItem = this.menuItems[0];

  selectItem(item: string) {
    this.selectedItem = item;
  }
}