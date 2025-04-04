import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>SpaceX Launches</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-toolbar {
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {}