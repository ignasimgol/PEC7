import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importación para las rutas

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ImageArticlePipe } from './pipes/image-article.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Definición de las rutas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticleListComponent }, // Ruta para la lista de artículos
  { path: 'new-article', component: ArticleNewReactiveComponent }, // Ruta para el nuevo artículo reactivo
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirección predeterminada
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleItemComponent,
    ImageArticlePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  // Configuración del RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

