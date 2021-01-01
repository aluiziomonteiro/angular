import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscriber } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course: Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){

    }
    ngOnInit(){ 
        // Execução assíncrona - (Fora do processamento do restante da aplicação)
        this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }
     
    save(): void{
        this.courseService.save(this.course);
    }
}