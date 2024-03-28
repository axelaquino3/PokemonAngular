import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular_Project';
  details!:any;
  
  ngOnInit() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.details = data;
    });
  }
}
