import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  standalone: true,
  imports: [MatIconModule, CommonModule]
})
export class AccueilComponent {

  Image: string = 'assets/photo_cv.jpg'; 
  
  // Hobbies list (similar to the icons in Flutter)
  hobbies = [
    { icon: 'sports_soccer', label: 'Soccer' },
    { icon: 'sports_tennis', label: 'Tennis' },
    { icon: 'flight_takeoff', label: 'Travel' },
    { icon: 'queue_music', label: 'Music' },
    { icon: 'groups_rounded', label: 'Socializing' }
  ];

  // Launch social media
  launchLinkedIn() {
    window.open(`https://www.linkedin.com/in/teddy-gesbert-354551199/`, '_blank');
  }
}
