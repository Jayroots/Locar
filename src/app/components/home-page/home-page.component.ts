import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class HomePageComponent {

}
