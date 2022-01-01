import { AboutMeComponent } from '../../about-me/about-me.component';
import { ExperiencesComponent } from '../../experiences/experiences.component';
import { InterestsComponent } from '../../interests/interests.component';
import { SkillsComponent } from '../../skills/skills.component';

export class Constant {
    public static ROUTE_MAPPING = [
        { path: '', component: AboutMeComponent },
        { path: 'experiences', component: ExperiencesComponent },
        { path: 'interests', component: InterestsComponent },
        { path: 'skills', component: SkillsComponent },
    ];
}
