import { Component, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InteractionService } from '../services/interaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pokemon-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  variable = '';
  pokemon: any = {};
  headers = new HttpHeaders().set("content-type", "application/json");
  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  subscription!: Subscription;

  constructor(private http: HttpClient, private interactionService: InteractionService) {
  }

  getPokemon(value: string) {
    this.interactionService.loading = true;
    this.subscription = this.http.get(this.url + value, { headers: this.headers, responseType: 'json' })
      .subscribe((data: any) => {
        this.pokemon = {};
        this.pokemon.id = data.id;
        this.pokemon.name = data.name;
        this.pokemon.source = data.sprites.front_default;
        this.interactionService.loading = false;
      }, (error) => {
        console.error(error);
        this.pokemon = {};
        this.interactionService.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
