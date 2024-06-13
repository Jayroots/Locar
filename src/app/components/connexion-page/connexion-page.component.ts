import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
})
export class ConnexionPageComponent  {
  identifiant: string = '';
  motDePasse: string = '';
  probAuthent: boolean = false;
  autreProb: boolean = false;
  messageProb: string = '';

  constructor(private httpService:HttpClientService, private router: Router, private authService: AuthService) {}

  connexion(): void {
    this.probAuthent = false;
    this.autreProb = false;
    this.messageProb = '';

    this.httpService.connexion(this.identifiant, this.motDePasse).pipe()
      .subscribe(response => {
        console.log("token obtenu : " + JSON.stringify(response));
        this.authService.login(response.token);
        alert("Vous êtes bien connecté ! \n Vous allez être redirigé vers la page d'accueil 🙂")
        this.router.navigate(['/home']);
      }, error => {
        if (error.status === 401) {
          this.probAuthent = true;
        } else {
          this.autreProb = true;
          this.messageProb = "Erreur d'authentification";
        }
      });
  }
}
