import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { TodosComponent } from './components/todos/todos.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    MyprofileComponent,
    TodosComponent,
    PostDetailsComponent,
    PostsListComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserCardComponent,
    AlbumsListComponent,
    AlbumDetailsComponent,
    AlbumCardComponent
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
