import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../../../services/spacex.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  launches: any[] = [];  // Array to store launch data
  displayedLaunches: any[] = [];  // Array to store launches for current page
  error: any;           // Variable to store potential error
  pageSize: number = 5; // Number of launches per page
  currentPage: number = 0; // Current page index

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.spacexService.getLaunches()
      .subscribe(data => {
        this.launches = data || [];
        this.updateDisplayedLaunches();
      }, error => {
        this.error = error; // Handle error in the component for UI display or logging
      });
  }

  updateDisplayedLaunches() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedLaunches = this.launches.slice(startIndex, endIndex);
  }

  onPageChange(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.getTotalPages()) {
      this.currentPage = pageIndex;
      this.updateDisplayedLaunches();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.launches.length / this.pageSize);
  }
}
