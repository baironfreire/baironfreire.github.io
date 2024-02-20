import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
