import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientService } from '../../services/http-client.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, CommonModule,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class HomePageComponent {

  laReponse : any;

  listeVehiculeComplete : any;

  constructor(private httpService : HttpClientService) {}
 
  rechercheVehicules(){
    this.httpService.recupererTousLesVehicules().pipe()
    .subscribe(reponse => {
      this.laReponse = JSON.stringify(reponse);
      console.log(reponse);
    });
  }



 

}
