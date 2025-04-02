import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';
import { Launch } from '../models/launch';

@Component({
  selector: 'app-missionlist',
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