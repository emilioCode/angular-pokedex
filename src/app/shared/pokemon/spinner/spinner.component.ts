import { Component } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'pokemon-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  interactionService:any;
  constructor(private _interactionService: InteractionService){
    this.interactionService = _interactionService;
  }
}

