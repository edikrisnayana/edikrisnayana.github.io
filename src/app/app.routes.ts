import { Routes } from '@angular/router';
import { AboutMe } from './components/about-me/about-me';
import { Experiences } from './components/experiences/experiences';
import { Skills } from './components/skills/skills';
import { Interests } from './components/interests/interests';

export const routes: Routes = [
  { path: '', component: AboutMe },
  { path: 'about', component: AboutMe },
  { path: 'experiences', component: Experiences },
  { path: 'skills', component: Skills },
  { path: 'interests', component: Interests },
  { path: '**', redirectTo: '' }
];
