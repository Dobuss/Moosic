import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthActivate } from './shared/authGuards';
import { CatalogComponent } from './songs/catalog/catalog.component';
import { CreateSongComponent } from './songs/create-song/create-song.component';
import { EditSongComponent } from './songs/edit-song/edit-song.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
          loginRequired: true
        }
      },
    ],
  },
  {
    path: 'catalog',
    canActivate: [AuthActivate],
    data: {
      loginRequired: true,
    },
    children: [
      {
        path: '',
        component: CatalogComponent,
      },
      {
        path: 'create',
        component: CreateSongComponent,
      },
      {
        path: 'edit',
        component: EditSongComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
