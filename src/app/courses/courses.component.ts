import { Component, inject, signal } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = signal<Course[]>([]); //lista från början från filen med alla kurser
  error = signal<string | null>(null); //felmeddelande om kurser inte går att hämta
  filteredCourses = signal<Course[]>([]); //till listan med filtrering av kurser 
  filterValue: string = ''; //string för att ha en textsträng från input fältet

  courseService = inject(CourseService);

  ngOnInit() {
    this.loadCourses();
  }

  //hämtar in kurserna och filtrerade kurser
  async loadCourses() {
    try {
      const response = await this.courseService.loadCourses();
      this.courses.set(response);
      this.filteredCourses.set(response);
      console.table(this.courses());
    } catch(error) {  
      console.error(error);
      this.error.set("Problem med att ladda in data - testa igen om en stund!");
    }
  }

  //filtrerar de olika kurserna beroende på vad man skriver in i input-fältet, sedan uppdaterar listan 
  applyFilter(): void {
    const filterCourse = this.courses().filter(course =>
      course.code.toLowerCase().includes(this.filterValue.toLocaleLowerCase()) ||
      course.coursename.toLocaleLowerCase().includes(this.filterValue.toLocaleLowerCase())
    );
    this.filteredCourses.set(filterCourse);
  }
  
  //sorterar på th kolumnerna, kod, namn och progression med hjälp av field
  sortingCourses(field: 'code' | 'coursename' | 'progression'): void {
    const sorted = this.filteredCourses().sort((a, b) => {
      return a[field].localeCompare(b[field]);
    });
    this.filteredCourses.set(sorted);
  } 
}
