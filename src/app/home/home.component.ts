import { Component } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component'; // Import the component
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [AccueilComponent, EducationComponent, ExperienceComponent, SkillsComponent, CommonModule]
})
export class HomeComponent {
  selectedIndex: number = 0;
  
  // Array of page components
  pages: string[] = ['accueil', 'education', 'experience', 'skills', 'more'];

  // Function to switch between pages
  changePage(index: number) {
    this.selectedIndex = index;
  }
}
