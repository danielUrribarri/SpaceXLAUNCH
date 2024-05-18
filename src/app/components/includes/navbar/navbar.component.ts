import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  status: boolean = false;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}
