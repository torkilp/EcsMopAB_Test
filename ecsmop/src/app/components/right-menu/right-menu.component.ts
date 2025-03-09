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


  menuItems = [
    { name: 'Alarms', subMenu: [] },
    {
      name: 'Engine',
      subMenu: ['Operation', 'Status', 'Process Info', 'Process Adjustment', 'Chief Limiters'],
      isSubMenuVisible: false
    },
    { name: 'Operation', subMenu: [] },
    { name: 'Status', subMenu: [] },
    { name: 'Process Info', subMenu: [] },
    { name: 'Process Adjustment', subMenu: [] },
    { name: 'Chief Limiters', subMenu: [] },
    { name: 'Auxiliaries', subMenu: [] },
    { name: 'Maintenance', subMenu: [] },
    { name: 'Admin', subMenu: [] }
  ];

  selectedItem = this.menuItems[0].name;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  toggleSubMenu(item: any) {
    if (item.name === 'Engine') {
      item.isSubMenuVisible = !item.isSubMenuVisible;
    }
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

