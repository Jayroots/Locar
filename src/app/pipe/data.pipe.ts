import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean',
  standalone: true
})

export class BooleanPipe implements PipeTransform {

  transform(value: any): any {
    if(value === true || value === 1){
      return "OUI"
    } else if (value === false || value === 0) {
      return "NON";
    }
  }

}


