import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { LoginComponent } from './components/login/login.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';

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
    component: AlbumsComponent
  },
  {
    path: 'perfil',
    component: MyprofileComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'usuarios',
    component: UsersComponent
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
