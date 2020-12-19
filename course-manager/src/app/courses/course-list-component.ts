import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({ 
    selector: 'app-course-list',
    templateUrl: './course-list-component.html' 
  })
export class CourseListComponent implements OnInit{ // OnInit
    courses: Course[] = []; // Array de Cursos vazio

    ngOnInit(){ // Método que será executado na inicialização
      this.courses = [{
        id: 1,
        name: 'Angular: Forms',
        imageUrl: ' ',
        price: 99.99,
        code: 'XPS-8796',
        releaseData: 'November, 2, 2019',
        duration: 120,
        rating: 4.5, 
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: ' ',
        price: 45.99,
        code: 'LKL-1094',
        releaseData: 'December, 4, 2019',
        duration: 80,
        rating: 4,
      }
    ]
    }
}