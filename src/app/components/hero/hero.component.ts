import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public productsData: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getDataFromApi();
  }
  getDataFromApi() {
    const apiUrl = 'https://backend-calle-once.vercel.app/api/products/';

    this.http.get(apiUrl).subscribe(
      (data) => {
        this.productsData = data;
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
}
