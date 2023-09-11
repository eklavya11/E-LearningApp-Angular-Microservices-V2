import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { StudentApiService } from './studentapi.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api: StudentApiService,
    private alert: AlertService
  ) { }



  getAllStudents() {
    return this.api.get(`/apistudent/getAll/students`);
  }
}
