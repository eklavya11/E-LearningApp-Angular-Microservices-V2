import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(message: string) {
    Swal.fire("Warning", message, 'warning');
  }

  success(message: string) {
    return Swal.fire("Success", message, 'success');
  }
  apiFail1(res: any) {
    Swal.fire(res?.error?.error || 'Warning..', res?.error?.message || 'Wrong credentials', 'error');
  }
  apiFail3(res:any){
    Swal.fire('Already Enrolled');
  }
  apiFail(res : any) {
    Swal.fire( 'Username or Email Already exists');
  }
  apiFail4(res : any) {
    Swal.fire( 'Delete Successful');
  }
  apiFail2(res: any) {
    Swal.fire(res?.error?.error || 'Warning..', res?.error?.message || 'Already Booked', 'error');
  }
  apiSuccess(res: any) {
    Swal.fire(res?.statusCode, res?.status, 'success');
  }
}
