import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSongComponent } from './create-song/create-song.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditSongComponent } from './edit-song/edit-song.component';



@NgModule({
  declarations: [
    CreateSongComponent,
    CatalogComponent,
    EditSongComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SongsModule { }
