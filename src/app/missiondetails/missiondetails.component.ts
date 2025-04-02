import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../services/space-x.service';
import { Launch } from '../models/launch';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule 
  ]
})
export class MissiondetailsComponent implements OnInit {
  launch: Launch | null = null;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spaceXService.getLaunchById(+id).subscribe({
        next: (data) => this.launch = data,
        error: () => this.launch = null
      });
    }
  }
}