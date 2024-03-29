import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    PokemonViewComponent,
    HeaderComponent,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Pokemon_Angular_Project';
  
}
