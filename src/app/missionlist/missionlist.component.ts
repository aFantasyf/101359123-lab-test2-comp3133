import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../services/space-x.service';
import { Launch } from '../models/launch';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MissionfilterComponent 
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.loadLaunches();
  }

  loadLaunches(year?: string): void {
    if (year) {
      this.spaceXService.getLaunchesByYear(year).subscribe(data => this.launches = data);
    } else {
      this.spaceXService.getLaunches().subscribe(data => this.launches = data);
    }
  }

    onYearSelected(year: string): void {
    this.loadLaunches(year); 
  }
}