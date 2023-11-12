import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
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
        console.log(this.productsData);
        console.log('XDDDDD');
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
}
