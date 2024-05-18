import { Component } from '@angular/core';
import { NavbarComponent } from '../includes/navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent,
    HomeComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
