import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-routing',
  standalone: true,
  imports: [RouterLink, MatToolbarModule,CommonModule],
  templateUrl: './header-routing.component.html',
  styleUrl: './header-routing.component.scss'
})
export class HeaderRoutingComponent implements AfterContentChecked {


  token:any;
  isConnected:boolean;

 


constructor(){
  this.isConnected = false;
  this.token = "";

  


}
  ngAfterContentChecked(): void {
   
    if(sessionStorage.getItem('token') !== null){
      this.token = sessionStorage.getItem('token');
      this.isConnected = true;
      console.log("token : "+ this.token)
      console.log("isconnected : "+ this.isConnected)

  }



  
 
   
  
 
  
  }

}
