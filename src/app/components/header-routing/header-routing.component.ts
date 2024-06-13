import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header-routing',
  standalone: true,
  imports: [RouterLink, MatToolbarModule,CommonModule,MatIconModule ],
  templateUrl: './header-routing.component.html',
  styleUrl: './header-routing.component.scss'
})
export class HeaderRoutingComponent implements OnInit {
  isConnected: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isConnected = isAuthenticated;
    });
  }

  deconnexion(): void {
    this.authService.logout();
    alert("Vous êtes bien déconnecté ! \n Vous allez être redirigé vers la page de connexion 🙂 \n A bientôt !")

    this.router.navigate(['/connexion']);
  }
}
