import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicule-details-page',
  standalone: true,
  imports: [],
  templateUrl: './vehicule-details-page.component.html',
  styleUrl: './vehicule-details-page.component.scss'
})
export class VehiculeDetailsPageComponent implements OnInit{

  
  vehiculeId = 0;

  constructor(private readonly activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.vehiculeId = this.activatedRoute.snapshot.params['id'];
  }




}
