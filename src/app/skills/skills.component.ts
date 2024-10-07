import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {

  // Hard skills image path
  hardSkillsImage: string = 'assets/hardskills.png'; // Add the actual path to your image

  // Soft skills list
  softSkillsList: string[] = [
    'Team Collaboration',
    'Adaptability',
    'Problem-solving',
    'Communication',
    'Entrepreneurship',];
}
