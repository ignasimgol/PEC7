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
  { path: 'article/list', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent }, 
  { path: 'article/create', component: ArticleNewReactiveComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
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
    ArticleDetailComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [
    UserService,  
    UserStoreService,  
    {
      provide: HTTP_INTERCEPTORS,  
      useClass: ArticleAppInterceptor, 
      multi: true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
