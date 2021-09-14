import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { InteractionService } from './services/interaction.service';

@NgModule({
  declarations: [
    LayoutComponent,
    SearchComponent,
    LogoComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],exports:[
    LayoutComponent
  ],
  providers:[
    InteractionService
  ]
})
export class PokemonModule { }
