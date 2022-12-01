import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSongComponent } from './create-song/create-song.component';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    CreateSongComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SongsModule { }
