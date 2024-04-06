import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  public getPokemonData(): Observable<any> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon?limit=10")
   }
 
   public getMorePokemonData(name: string): Observable<any> {
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
   }
}
