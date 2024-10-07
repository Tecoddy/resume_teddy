import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EducationComponent {

  // Array of educational experiences
  educationList = [
    {
      name: 'Yucatan',
      image: 'assets/yucatan.png',
      description1: 'Exchange Semester - Mérida 🇲🇽',
      description2: 'AI ◉ Software Development ◉ AWS',
      link: 'https://uady.mx/'
    },
    {
      name: 'Harvard',
      image: 'assets/harvard.png',
      description1: 'Summer School - Exchange Program',
      description2: 'Agile Software Development ◉ Creativity and Innovation',
      link: 'https://summer.harvard.edu/'
    },
    {
      name: 'Audencia',
      image: 'assets/audencia.png',
      description1: 'Double Degree in Engineering and Management',
      description2: 'Major Marketing for Product Management',
      link: 'https://www.audencia.com/'
    },
    {
      name: 'INSA',
      image: 'assets/insa.png',
      description1: 'Engineering School',
      description2: 'Specialized in Computer Science and Engineering',
      link: 'https://www.insa-rennes.fr/'
    }
  ];

  // Function to open URLs in a new tab
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
