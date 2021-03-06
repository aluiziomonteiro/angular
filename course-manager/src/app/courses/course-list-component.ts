import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({ 
    templateUrl: './course-list-component.html' 
  })
export class CourseListComponent implements OnInit{ 

    filteredCourses: Course[] = [];

    _courses: Course[] = []; 

    _filterBy: string;

    constructor (private courseService: CourseService){}

    ngOnInit(){ 
      this.retrieveAll();
    }

    retrieveAll(): void {
      this.courseService.retrieveAll().subscribe({ // Escuta o Observable
        next: courses => { // Recebe o retorno do retrieveAll de course-services.ts
          this._courses = courses;
          this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err)
      })
    }

    deleteById(courseId: number) : void{
      this.courseService.deleteById(courseId).subscribe({
        next: () => {
          console.log('Deleted with success');
          this.retrieveAll(); // Filtra novamente, para atualizar o componente
        },
        error: err => console.log('Error', err)
      })
    }

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