import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpacexService } from '../../../services/spacex.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  launchpads: any[] = [];  // Array to store launchpad data
  filteredLaunchpads: any[] = [];  // Array to store filtered launchpad data
  launches: any[] = [];  // Array to store launch data
  error: any;           // Variable to store potential error
  nameFilter: string = '';  // Filter for launchpad name
  regionFilter: string = '';  // Filter for launchpad region
  launchpadNames: string[] = [];  // Array to store unique launchpad names
  launchpadRegions: string[] = [];  // Array to store unique launchpad regions

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    forkJoin({
      launchpads: this.spacexService.getLaunchpads(),
      launches: this.spacexService.getLaunches()
    }).subscribe(({ launchpads, launches }) => {
      this.launchpads = launchpads.map((lp: { id: any; }) => ({
        ...lp,
        launches: launches.filter((launch: { launchpad: any; }) => launch.launchpad === lp.id)
      }));
      this.filteredLaunchpads = this.launchpads;
      this.launchpadNames = Array.from(new Set(this.launchpads.map(lp => lp.name)));
      this.launchpadRegions = Array.from(new Set(this.launchpads.map(lp => lp.region)));
    }, error => {
      this.error = error; // Handle error in the component for UI display or logging
    });
  }

  applyFilters() {
    this.filteredLaunchpads = this.launchpads.filter(lp =>
      (this.nameFilter ? lp.name === this.nameFilter : true) &&
      (this.regionFilter ? lp.region === this.regionFilter : true)
    );
  }
}
