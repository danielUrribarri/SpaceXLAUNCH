import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { SpacexService } from '../../../services/spacex.service';
import { Launchpad } from '../../../interfaces/launchpad';
import { Landpad } from '../../../interfaces/landpad';
import { Launch } from '../../../interfaces/launch';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  launchpads: Launchpad[] = []; 
  landpads: Landpad[] = [];  
  filteredLaunchpads: Launchpad[] = [];  
  launches: Launch[] = [];  
  nameFilter: string = '';  
  regionFilter: string = '';  
  launchpadNames: string[] = [];  
  launchpadRegions: string[] = [];  
  currentPage: number = 0;
  itemsPerPage: number = 5;
  paginatedLaunchpads: Launchpad[] = [];
  paginatedLandpads: Landpad[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    forkJoin({
      launchpads: this.spacexService.getLaunchpads(),
      launches: this.spacexService.getLaunches(),
      landpads: this.spacexService.getLandpads()
    }).subscribe(({ launchpads,
                    launches,
                    landpads }) => {
      this.launchpads = launchpads.map((lp: Launchpad) => ({
        ...lp,
        launches: launches.filter((launch: Launch) => launch['launchpad'] === lp.id)
      }));

      this.landpads = landpads;

      this.filteredLaunchpads = this.launchpads;
      this.launchpadNames = Array.from(new Set(this.launchpads.map((lp: Launchpad) => lp.name)));
      this.launchpadRegions = Array.from(new Set(this.launchpads.map((lp: Launchpad) => lp.region)));

      this.updatePaginatedData();
    });
  }

  applyFilters() {
    this.filteredLaunchpads = this.launchpads.filter((lp: Launchpad) =>
      (this.nameFilter ? lp.name === this.nameFilter : true) &&
      (this.regionFilter ? lp.region === this.regionFilter : true)
    );
    this.currentPage = 0;
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedLaunchpads = this.filteredLaunchpads.slice(start, end);
    this.paginatedLandpads = this.landpads.slice(start, end);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  getTotalPages(dataLength: number): number {
    return Math.ceil(dataLength / this.itemsPerPage);
  }
}
