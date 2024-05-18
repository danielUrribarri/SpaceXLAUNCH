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
 isList: number|undefined;
 isMenu: boolean = false;
 isSearch: boolean = false;
 constructor() {}
 ngOnInit(): void {}
}