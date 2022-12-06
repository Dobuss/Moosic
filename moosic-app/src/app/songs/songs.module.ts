import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSongComponent } from './create-song/create-song.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateSongComponent,
    CatalogComponent,
    EditSongComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class SongsModule { }
