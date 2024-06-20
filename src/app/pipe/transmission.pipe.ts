import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmission',
  standalone: true
})

export class TransmissionPipe implements PipeTransform {

  transform(value: string): string {
    if(value === "MANUAL"){
      return "MANUELLE"
    } else {
      return "AUTO";
    }
  }

}


