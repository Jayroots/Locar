import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header-routing',
  standalone: true,
  imports: [RouterLink, MatToolbarModule],
  templateUrl: './header-routing.component.html',
  styleUrl: './header-routing.component.scss'
})
export class HeaderRoutingComponent {

}
