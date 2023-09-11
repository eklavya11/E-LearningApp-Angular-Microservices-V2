import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { TestApiService } from './testapi.service';
import { TestDTO } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private api: TestApiService,
    private alert: AlertService
  ) { }

  create(payload: TestDTO, callback?: () => void) {
    return this.api.post('/apitest/test/add', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Test registration successful.')
      
    });
  }

  getAllTests() {
    return this.api.get(`/apitest/test/all`);
  }
  }