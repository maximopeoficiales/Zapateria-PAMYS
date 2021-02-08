import swal from 'sweetalert2';
import { TypeMessageSwal } from './TypeMessageSwal';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SwalAlerts {
  showMessage(title = '', subtitle = '', icon?: TypeMessageSwal, 
              duration?: number, showOkButton?: boolean): void {
    
    if (showOkButton == undefined)
      showOkButton = true;

    swal.fire({
      title: title,
      text: subtitle,
      icon: icon,
      showConfirmButton: showOkButton
    });    
    // swal.fire(title, subtitle, icon);
    if (duration)
      setTimeout(() => {
        swal.close();
      }, duration);
  }
}
