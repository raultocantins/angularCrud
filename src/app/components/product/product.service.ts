
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "http://localhost:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'fechar', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))

    )
  }


  handleError(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro !', true)
    return EMPTY
  }
  read(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))

    )
  }
  readById(id: string | number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))

    )
  }
  update(product: Product): Observable<Product> {
    const url: string = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))

    )
  }
  delete(id: string | number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))

    )
  }
}
