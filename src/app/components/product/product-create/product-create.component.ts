import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null
  }
  constructor(private productServer: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct() {
    this.productServer.create(this.product).subscribe(()=>{
      this.productServer.showMessage('Produto criado !')
      this.router.navigate(['/products'])
    } )
   
  }
  cancel() {
    this.router.navigate(['/products'])
  }
}
