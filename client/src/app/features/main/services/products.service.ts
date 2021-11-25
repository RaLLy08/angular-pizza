import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ProductShort } from './../models/products';


@Injectable({ providedIn: 'root' })
export class ProductsService {
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductShort[]> {
    return this.http.get<ProductShort[]>('products')
  }

}


