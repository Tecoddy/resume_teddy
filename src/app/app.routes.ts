import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Import HomeComponent
import { AccueilComponent } from './accueil/accueil.component';  // Import AccueilComponent
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Set HomeComponent as the default route
  { path: 'accueil', component: AccueilComponent },  // Accueil page route
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent }
];
