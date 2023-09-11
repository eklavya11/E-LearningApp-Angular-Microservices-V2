import { Injectable } from '@angular/core';

import { CourseDTO } from '../interfaces';

import { AlertService } from './alert.service';



import { CourseApiService } from './courseapi.service';

@Injectable({

  providedIn: 'root'

})

export class CourseService {

 

  constructor(

    private api: CourseApiService,

    private alert: AlertService

  ) { }

 

  getAll() {

    return this.api.get('/apicourse/course/all');

  }

  getMyCourses(Id: number) {
    return this.api.get(`/apicourse/get-course-by-student/${Id}`);
  }



 

 

  create(payload: CourseDTO, callback?: () => void) {

    return this.api.post('apicourse/course/add', payload).subscribe((res: any) => {

      if (callback) callback();

      this.alert.success('Course registration successful.')

    });

  }

 addCourseToStudent(id:number,payload: CourseDTO){
 
  return this.api.post(`/apicourse/add-course-to-student/${id}`,payload).subscribe((res:any)=> {
    
    this.alert.success('Course enrollment successful.')
  }, this.alert.apiFail3);
  
 }

 removeCourseFromStudent(id:number,payload:CourseDTO){
  return this.api.post(`/apicourse/delete-course-from-student/${id}`,payload).subscribe((res:any)=> {
    
    this.alert.success('Course unenrolled.')
  });
 }

  update(payload: CourseDTO, callback?: () => void) {

    return this.api.put(`apicourse/course/update/${payload.id}`, payload).subscribe((res: any) => {

      if (callback) callback();

      this.alert.success('Course update successful.')

    });

  }

 

  deleteCourse(id: number, callback?: () => void) {

 

    this.api.delete(`/course/delete/{id}/${id}`).subscribe(res => {

 

      this.alert.success('delete successful.');

 

      if (callback) callback();

 

      location.reload();

 

    });

  }

  getMyCourse(id: number) {

 

    return this.api.get(`/one/{id}`);

 

  }

}