import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({ 
    selector: 'app-course-list',
    templateUrl: './course-list-component.html' 
  })
export class CourseListComponent implements OnInit{ 

    filteredCourses: Course[] = [];

    _courses: Course[] = []; 

    _filterBy: string;

    constructor (private courseService: CourseService){}

    ngOnInit(){ 
      // This curso será filtrado baseado no que for digitado no input
      this._courses = this.courseService.retrieveAll();
      this.filteredCourses = this._courses;
    }

    // Usado quando digitar-mos no input
    set filter(value: string) {
      this._filterBy = value;

      this.filteredCourses = this._courses.filter((course: Course) => 
      course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    // Usado quando o dado for atualizado no input
    get filter() {
      return this._filterBy;
    }
}