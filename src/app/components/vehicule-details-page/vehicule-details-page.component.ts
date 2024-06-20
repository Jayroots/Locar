import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';
import { BooleanPipe } from '../../pipe/data.pipe';
import { CarburantPipe } from '../../pipe/carburant.pipe';
import { TransmissionPipe } from '../../pipe/transmission.pipe';
import { TypePipe } from '../../pipe/type.pipe';


@Component({
  selector: 'app-vehicule-details-page',
  standalone: true,
  imports: [BooleanPipe, CarburantPipe, TransmissionPipe, TypePipe],
  templateUrl: './vehicule-details-page.component.html',
  styleUrl: './vehicule-details-page.component.scss'
})
export class VehiculeDetailsPageComponent implements OnInit{

  
  vehiculeId = 0;
  vehicule : any;
 

  constructor(private readonly activatedRoute:ActivatedRoute, private httpService : HttpClientService,private router: Router){
    
  }

 

  ngOnInit(): void {
    this.vehiculeId = this.activatedRoute.snapshot.params['id'];

    this.httpService.recupererVehiculeParId(this.vehiculeId).pipe()
    .subscribe(reponse => {
      this.vehicule = (reponse);
      console.log(reponse);

      if(this.vehicule.imagePath.length <= 12 ){
        this.vehicule.imagePath = "http://localhost:8080/api/public/images/"+ this.vehicule.imagePath;
      }
      
    }, error=>{
     
        this.router.navigate(["/home"]);
      
        
    
    })
  }




}
