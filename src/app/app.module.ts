import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { AlbumsListComponent } from './components/albums/albums-list/albums-list.component';
import { AlbumDetailsComponent } from './components/albums/album-details/album-details.component';
import { AlbumCardComponent } from './components/albums/album-card/album-card.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { PostCardComponent } from './components/posts/post-card/post-card.component';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MyprofileComponent,
    PostDetailsComponent,
    PostsListComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserCardComponent,
    AlbumsListComponent,
    AlbumDetailsComponent,
    AlbumCardComponent,
    TodosListComponent,
    TodoComponent,
    PostCardComponent,
    PostsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
