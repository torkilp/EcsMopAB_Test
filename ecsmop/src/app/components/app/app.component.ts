import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from '../status-bar/status-bar.component';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { MainAreaComponent } from '../main-area/main-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StatusBarComponent,RightMenuComponent,MainAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecsmop';
}
