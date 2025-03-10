import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  imports: [CommonModule, RouterLink]
})

export class RightMenuComponent {

  menuItems = [
    {
      name: 'Alarms',
      subMenu: [{ name: 'Alarm List', route: 'alarm-list' },
      { name: 'Event Log', route: 'alarm-eventlog' },
      { name: 'Manual Cut-Out List', route: 'alarm-cutoutlist' },
      { name: 'Channel List', route: 'alarm-channellist' }],
      isSubMenuVisible: false
    },
    {
      name: 'Engine',
      subMenu: [{ name: 'Operation', route: '' },
      { name: 'Status', route: 'engine-status' },
      { name: 'Process Info', route: 'engine-processinfo' },
      { name: 'Process Adjustment', route: '' },
      { name: 'Chief Limiters', route: '' }],
      isSubMenuVisible: false
    },
    {
      name: 'Auxiliaries',
      subMenu: [{ name: 'Hydralic System', route: '' },
      { name: 'Scavenge Air', route: '' },
      { name: 'Secound Fuel System', route: '' },
      { name: 'Cylinder Lubrication', route: '' }],
      isSubMenuVisible: false
    },
    {
      name: 'Maintenance',
      subMenu: [{ name: 'System View I/O List', route: '' },
      { name: 'Invalid IO Channels', route: '' },
      { name: 'Network Status', route: '' },
      { name: 'Function Test', route: '' },
      { name: 'Trouble Shooting', route: '' }],
      isSubMenuVisible: false
    },
    {
      name: 'Admin',
      subMenu: [{ name: 'Set Time', route: '' },
      { name: 'About', route: '' },
      { name: 'License Agreement', route: '' },
      { name: 'Update', route: '' }],
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

