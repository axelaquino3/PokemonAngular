import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './pokemon-view.component.html',
  styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent implements OnInit {
  
  public pokemons:any[] = []
  
  constructor(
    private dataService: DataService
    ) { }  

  ngOnInit(): void {
    this.dataService.getPokemonData()
    .subscribe((response:any) => {
      response.results.map((result:any): void => {
        this.dataService.getMorePokemonData(result.name)
        .subscribe((res:any) => {
          this.pokemons.push(res)
          // console.log(this.pokemons)
        })
      })
    })
  }

}

