import { Component, inject, signal } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = signal<Course[]>([]);
  error = signal<string | null>(null);

  courseService = inject(CourseService);

  ngOnInit() {
    this.loadCourses();
  }

  async loadCourses() {
    try {
      const response = await this.courseService.loadCourses();
      this.courses.set(response);
      console.table(this.courses());
    } catch(error) {  
      console.error(error);
      this.error.set("Problem med att ladda in data - testa igen om en stund!");
    }
  }
}
