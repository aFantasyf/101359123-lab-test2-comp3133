import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { SpaceXService } from '../services/space-x.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent implements OnInit {
  years: string[] = []; 
  @Output() yearSelected = new EventEmitter<string>();

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe(launches => {
      const allYears = launches.map(launch => launch.launch_year);
      this.years = [...new Set(allYears)].sort((a, b) => b.localeCompare(a));
    });
  }

  onYearSelect(event: MatSelectChange): void {
    this.yearSelected.emit(event.value);
  }
}