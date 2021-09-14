import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  constructor() { }
  logo:string = '../../../../assets/logo-pokemon.png';


}
