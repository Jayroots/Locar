import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-vehicule-details-page',
  standalone: true,
  imports: [],
  templateUrl: './vehicule-details-page.component.html',
  styleUrl: './vehicule-details-page.component.scss'
})
export class VehiculeDetailsPageComponent implements OnInit{

  
  vehiculeId = 0;
  vehicule : any;

  constructor(private readonly activatedRoute:ActivatedRoute, private httpService : HttpClientService){
    
  }

 

  ngOnInit(): void {
    this.vehiculeId = this.activatedRoute.snapshot.params['id'];

    this.httpService.recupererVehiculeParId(this.vehiculeId).pipe()
    .subscribe(reponse => {
      this.vehicule = (reponse);
      console.log(reponse);
      this.vehicule.imagePath = "http://localhost:8080/api/public/images/"+ this.vehicule.imagePath;
    })
  }




}
