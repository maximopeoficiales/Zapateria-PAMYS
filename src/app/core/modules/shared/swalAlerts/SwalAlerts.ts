import swal from 'sweetalert2';
import { TypeMessageSwal } from './TypeMessageSwal';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SwalAlerts {
  showMessage(title = '', subtitle = '', icon?: TypeMessageSwal): void {
    swal.fire(title, subtitle, icon);
  }
}
