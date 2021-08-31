import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/albums/album-details/album-details.component';
import { AlbumsListComponent } from './components/albums/albums-list/albums-list.component';
import { AlbumFormComponent } from './components/forms/album-form/album-form.component';
import { PostFormComponent } from './components/forms/post-form/post-form.component';
import { TodoFormComponent } from './components/forms/todo-form/todo-form.component';
import { LoginComponent } from './components/login/login.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posteos',
    pathMatch: 'full'
  },
  {
    path: 'posteos',
    component: PostsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posteos/:id',
    component: PostDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albumes',
    component: AlbumsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albumes/:id',
    component: AlbumDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: MyprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos',
    component: TodosListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UsersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ingresar',
    component: LoginComponent,
  },
  {
    path: 'registrarme',
    component: SignupComponent,
  },
  {
    path: 'form/album',
    component: AlbumFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form/todo',
    component: TodoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form/post',
    component: PostFormComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
