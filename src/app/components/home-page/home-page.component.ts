import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientService } from '../../services/http-client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IVehicule } from '../../interface/IVehicule';
import dateFormat from 'dateformat';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, CommonModule, DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class HomePageComponent {

  startDate : string = "";
  endDate : string = "";
  dateFormatee : string = "";
  dateDepartAFormater : any;
  dateFinAFormater : any;


listeVehiculeComplete : IVehicule[] = new Array;
  
listeVehiculesParDate : IVehicule[] = new Array;

range = new FormGroup({
  start: new FormControl<Date | null>(null),
  end: new FormControl<Date | null>(null),
});




  constructor(private httpService : HttpClientService) {
    
  }
 




  listeTousLesVehicules(){
    this.httpService.recupererTousLesVehicules().pipe()
    .subscribe(reponse => {
      this.listeVehiculeComplete = (reponse);
      console.log(reponse);
    });
  }


  recupererTousLesVehiculesParDate(){

    this.dateDepartAFormater = this.range.value.start;
this.dateFinAFormater = this.range.value.end;


    this.startDate = dateFormat(this.dateDepartAFormater, "yyyy-mm-dd").toString();
    this.endDate = dateFormat(this.dateFinAFormater, "yyyy-mm-dd").toString();
  
      this.httpService.recupererTousLesVehiculesParDate(this.startDate, this.endDate).pipe()
      .subscribe(vehiculesParDate => {
        this.listeVehiculesParDate = vehiculesParDate;
        console.log(vehiculesParDate)
      }

      )
  }



 

}
