import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];
  products: Product[];

	constructor() {
		this.articles = [
			new Article("Angular 2", "http://angular.io", 3),
			new Article("Stackoverflow", "http://stackoverflow.com", 20),
			new Article("Github", "http://github.com", 10),
		];

    this.products = [
      new Product(
        'movie0001', 
        'Pulp fiction',
        'https://render.fineartamerica.com/images/rendered/search/poster/images-medium-5/pulp-fiction-poster-6-irina-march.jpg',
        ['Action', 'Drama'],
        10
      ),
      new Product(
        'movie0002', 
        'The ring',
        'http://cdn8.larepublica.pe/sites/default/files/styles/img_620x369/public/imagen/2015/12/08/sa-Noticia-724372.jpg',
        ['Terror'],
        10
      ),
      new Product(
        'movie0003', 
        'The Mummy',
        'https://pics.filmaffinity.com/the_mummy-692544562-large.jpg',
        ['Action', 'Adventure'],
        10
      )
    ];
	}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  	this.articles.push(new Article(title.value, link.value, 0));
  	title.value = null;
  	link.value = null;
    return false;
  }

  sortedArticles(): Article[]{
  	return this.articles.sort(
  		(a: Article, b: Article) => b.votes - a.votes
  	);
  }


}
