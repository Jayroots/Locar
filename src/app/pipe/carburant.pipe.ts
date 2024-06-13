import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carburant',
  standalone: true
})

export class CarburantPipe implements PipeTransform {

  transform(value: string): string {
    if(value === "PETROL"){
      return "ESSENCE"
    } else {
      return value;
    }
  }

}


