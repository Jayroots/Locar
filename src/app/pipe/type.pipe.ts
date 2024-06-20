import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
  standalone: true
})

export class TypePipe implements PipeTransform {

  transform(value: any): any {
    if(value === "CITY_DWELLER"){
      return "SUV"
    } else if(value === "FAMILY"){
      return "FAMILIALE"
    } else if(value === "SEDAN"){
      return "BERLINE"
    } else if(value === "CHILDREN"){
      return "ENFANT"
    } 
  
    else  {
      return value;
    }
  }

}


