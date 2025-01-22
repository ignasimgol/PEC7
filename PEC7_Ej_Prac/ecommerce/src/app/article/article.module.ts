import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ImageArticlePipe } from '../pipes/image-article.pipe';
import { AuthGuard } from '../guards/auth.guard';  // Importación del AuthGuard

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },  // Protección con AuthGuard
  { path: ':id', component: ArticleDetailComponent }
];

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    ImageArticlePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuard]  // Agregar el guard como proveedor, si es necesario
})
export class ArticleModule { }

