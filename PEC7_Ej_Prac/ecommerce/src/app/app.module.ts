import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // Importación para el interceptor
import { RouterModule, Routes } from '@angular/router'; // Importación para las rutas

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ImageArticlePipe } from './pipes/image-article.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component'; // Asegúrate de importar ArticleDetailComponent

// Importar los servicios
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

// Importar el interceptor
import { ArticleAppInterceptor } from './interceptors/article-app.interceptor';

// Definición de las rutas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticleListComponent }, // Ruta para la lista de artículos
  { path: 'articles/:id', component: ArticleDetailComponent }, // Ruta para el detalle del artículo
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
    RegisterComponent,
    ArticleDetailComponent  // Declara ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  // Configuración del RouterModule
  ],
  providers: [
    UserService,  // Proveedor del servicio de usuario
    UserStoreService,  // Proveedor del servicio de almacenamiento del usuario
    {
      provide: HTTP_INTERCEPTORS,  // Añadir el interceptor para manejar el token
      useClass: ArticleAppInterceptor, 
      multi: true  // Permitir múltiples interceptores
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
