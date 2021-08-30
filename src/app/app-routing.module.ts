import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/albums/album-details/album-details.component';
import { AlbumsListComponent } from './components/albums/albums-list/albums-list.component';
import { LoginComponent } from './components/login/login.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posteos',
    pathMatch: 'full'
  },
  {
    path: 'posteos',
    component: PostsListComponent
  },
  {
    path: 'posteos/:id',
    component: PostDetailsComponent
  },
  {
    path: 'albumes',
    component: AlbumsListComponent
  },
  {
    path: 'albumes/:id',
    component: AlbumDetailsComponent
  },
  {
    path: 'perfil',
    component: MyprofileComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  },
  {
    path: 'usuarios',
    component: UsersListComponent
  },
  {
    path: 'usuarios/:id',
    component: UserDetailsComponent
  },
  {
    path: 'ingresar',
    component: LoginComponent
  },
  {
    path: 'registrarme',
    component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
