import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';  // Supongamos que tienes un servicio para artículos

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');  // Obtener el parámetro "id" de la URL
    if (articleId) {
      this.articleService.getArticleById(articleId).subscribe(
        article => this.article = article,
        error => console.error('Error al cargar el artículo', error)
      );
    }
  }
  
}

