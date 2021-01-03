import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list-component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [ 
        StarModule,
        CommonModule,
        FormsModule,
        AppPipeModule,
        RouterModule.forChild([ 
            { 
                path: 'courses', component: CourseListComponent 
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule{

}