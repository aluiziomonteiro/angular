import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    courseId: number;

    constructor(private activateRoute: ActivatedRoute){

    }
    ngOnInit(){
        // capture o estado da rota neste momento, obtendo o parametro "id",
        // e atribua ao "courseId"
        this.courseId = +this.activateRoute.snapshot.paramMap.get('id');
    }

}