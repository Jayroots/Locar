import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
})
export class ConnexionPageComponent  {
  identifiant : string;
  motDePasse : string;

  probAuthent: boolean;
  autreProb: boolean;
  messageProb: string;

  constructor(private httpService : HttpClientService, private router: Router) {
    this.identifiant = "";
    this.motDePasse = "";

    this.probAuthent = false;
    this.autreProb = false;
    this.messageProb = "";
  }


  connexion() {
    this.probAuthent = false;
    this.autreProb = false;
    this.messageProb = "";

    this.httpService.connexion(this.identifiant, this.motDePasse).pipe()
      .subscribe(reponse => {
        console.log("token obtenu : " + JSON.stringify(reponse));
        sessionStorage.setItem("token", reponse?.token);

        this.router.navigate(["/home"]);
      }, error => {
        if(error.status == 401) {
          this.probAuthent = true;
        } else {
          this.autreProb = true;
          this.messageProb = "Erreur d'authentification";
        }
      })

    
  }
}
