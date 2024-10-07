import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {

  // Array of work experiences
  experienceList = [
    {
      name: 'FluxApp',
      image: 'assets/fluxapp.png',
      position: 'Sole Proprietor',
      description: 'Developing and offering mobile apps to music festivals and soccer clubs.',
      link: 'https://www.linkedin.com/company/fluxapp'
    },
    {
      name: 'AI Startup - PureControl',
      image: 'assets/purecontrol.png',  // Placeholder for AI Startup logo
      position: 'Intern',
      description: 'Developed AI system for real-time industrial energy monitoring and prediction of water usage.',
      link: 'https://purecontrol.fr/'
    },
    {
      name: 'Foyer',
      image: 'assets/foyer.png',
      position: 'Volunteer',
      description: 'Participated as a volunteer, contributing to social initiatives and community support.',
      link: 'https://www.facebook.com/FoyerINSA'
    },
    {
      name: 'Bebop',
      image: 'assets/bebop.png',
      position: 'Event Manager',
      description: 'Managed events and logistics for a music festival, coordinating with artists and vendors.',
      link: 'https://www.facebook.com/bebop.insarennes'
    }
  ];

  // Function to open URLs in a new tab
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
