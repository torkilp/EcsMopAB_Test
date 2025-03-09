import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  imports: [CommonModule]
})
export class RightMenuComponent {
  constructor(private renderer: Renderer2) { }


  menuItems = [
    {
      name: 'Alarms',
      subMenu: []
    },
    {
      name: 'Engine',
      subMenu: ['Operation', 'Status', 'Process Info', 'Process Adjustment', 'Chief Limiters']
    },
    {
      name: 'Auxiliaries',
      subMenu: []
    },
    {
      name: 'Maintenance',
      subMenu: []
    },
    {
      name: 'Admin',
      subMenu: []
    }
  ];
  selectedItem = this.menuItems[0];
  isEngineSubMenuOpen = false;

  toggleSubMenu(item: { name: string; subMenu: string[] }) {

    if (item.name === 'Engine') {
      this.isEngineSubMenuOpen = !this.isEngineSubMenuOpen;
    } else {
      this.isEngineSubMenuOpen = false;
    }
    this.selectedItem = item;
  }



  reduceWidth() {
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach((button) => {
      this.renderer.addClass(button, 'reduced-width-button');
    });
  }

}