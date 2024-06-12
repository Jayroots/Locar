import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IClient, Licence } from '../../interface/IClient';
import dateFormat from 'dateformat';

@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './inscription-page.component.html',
  styleUrl: './inscription-page.component.scss'
})
export class InscriptionPageComponent {
 

    birthdate: any;
    inscriptionDate: any;
    street: string;
    postalCode: number;
    city: string;
    deactivated: boolean;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
   licencesList: Licence[];
  


  client:IClient;

  
  probAuthent: boolean;
  autreProb: boolean;
  messageProb: string;

  licences: Licence[];

  constructor(private httpService : HttpClientService, private router: Router) {
    this.email = "";
    this.password = "";
    this.lastname ="";
    this.firstname ="";
    this.licencesList = [];
    this.birthdate = null;
    this.inscriptionDate = dateFormat(Date.now(), "isoUtcDateTime");
    this.street = "";
    this.postalCode = 0;
    this.city = "";
    this.deactivated = false;
    this.confirmPassword = "";


    this.client = {
      email : this.email,
      password : this.password,
      lastname : this.lastname,
      firstname : this.firstname,
      licencesList : [],
      birthdate : this.birthdate,
      inscriptionDate : this.inscriptionDate,
      street : this.street,
      postalCode : this.postalCode,
      city : this.city,
      deactivated : this.deactivated,
      confirmPassword : this.confirmPassword
    }



    this.probAuthent = false;
    this.autreProb = false;
    this.messageProb = "";

    this.licences = this.initList();
  }








  inscription() {
    this.probAuthent = false;
    this.autreProb = false;
    this.messageProb = "";


    this.client = {
      email : this.email,
      password : this.password,
      lastname : this.lastname,
      firstname : this.firstname,
      licencesList : [],
      birthdate : this.birthdate,
      inscriptionDate : this.inscriptionDate,
      street : this.street,
      postalCode : this.postalCode,
      city : this.city,
      deactivated : this.deactivated,
      confirmPassword : this.confirmPassword
    }


    this.httpService.inscription(this.client).pipe()
      .subscribe(reponse => {
       console.log(this.client)
       console.log(reponse)

        this.router.navigate(["/home"]);
      }, error => {
        if(error.status == 401) {
          this.probAuthent = true;
        } else if(error.status == 400){
            alert("L'adresse email existe déjà")
        }
        
        else {
          this.autreProb = true;
          alert("Erreur d'authentification");
        }
      })    
  }

  initList() : Licence[]{
    const listeLicence:Licence[] = [];
    listeLicence.push(new Licence(1,"A"));
    listeLicence.push(new Licence(2,"B"));
    listeLicence.push(new Licence(3,"C"));
    listeLicence.push(new Licence(4,"A"));
    listeLicence.push(new Licence(5,"A"));
    return listeLicence;
  } 

}
