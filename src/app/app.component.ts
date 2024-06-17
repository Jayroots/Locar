import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderRoutingComponent } from './components/header-routing/header-routing.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderRoutingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-tp';
}
