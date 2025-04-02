import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent implements OnInit {
  years: string[] = [];
  @Output() yearSelected = new EventEmitter<string>();

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe(launches => {
      const allYears = launches.map(launch => launch.launch_year);
      this.years = [...new Set(allYears)].sort((a, b) => b.localeCompare(a));
    });
  }

  onYearSelect(event: any): void {
    this.yearSelected.emit(event.value);
  }
}