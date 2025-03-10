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
    {
      name: 'Alarms',
      subMenu: [{ name: 'Alarm List', route: 'alarm-list' },
      { name: 'Event Log', route: 'event-log' },
      { name: 'Manual Vut-Out List', route: 'manual-vut-out-list' },
      { name: 'Channel List', route: 'channel-list' }],
      isSubMenuVisible: false
    }
  ];

  menuItems1 = [
    {
      name: 'Alarms',
      subMenu: ['Alarm List', 'Event Log', 'Manual Vut-Out List', 'Channel List'],
      isSubMenuVisible: false
    },
    {
      name: 'Engine',
      subMenu: ['Operation', 'Status', 'Process Info', 'Process Adjustment', 'Chief Limiters'],
      isSubMenuVisible: false
    },
    {
      name: 'Auxiliaries',
      subMenu: ['Hydralic System', 'Scavenge Air', 'Secound Fuel System', 'Cylinder Lubrication'],
      isSubMenuVisible: false
    },
    {
      name: 'Maintenance',
      subMenu: ['System View I/O List', 'Invalid IO Channels', 'Network Status', 'Function Test', 'Trouble Shooting'],
      isSubMenuVisible: false
    },
    {
      name: 'Admin',
      subMenu: ['Set Time', 'About', 'License Agreement', 'Update'],
      isSubMenuVisible: false
    },
    {
      name: 'Power Off',
      subMenu: [],
      isSubMenuVisible: false
    },
    {
      name: 'System Options Operator',
      subMenu: [],
      isSubMenuVisible: false
    }
  ];

  selectedItem = this.menuItems[0].name;

  selectItem(item: string) {
    this.selectedItem = item;
  }


  toggleSubMenu(item: any): void {

    // console.log(item.name + typeof(item));
    // console.debug(item.name + typeof(item));

    if (Array.isArray(item)) {
      return;
    }

    this.menuItems.forEach(menuItem => {

      if (menuItem !== item) {
        menuItem.isSubMenuVisible = false;
      }
    });

    item.isSubMenuVisible = !item.isSubMenuVisible;

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

