import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../product.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  //product:Product={name:"teste",price:5.78}

product: Product = {
  name: '',
  price: null
}

  constructor(private serviceProduct: ProductService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
const id=this.route.snapshot.paramMap.get('id')
this.serviceProduct.readById(id!).subscribe((data)=>this.product=data)

  }
  updateProduct(){
this.serviceProduct.update(this.product).subscribe((_)=>{
  this.serviceProduct.showMessage('Produto atualizado!')
  this.router.navigate(["/products"])
})
  }

  cancel(){
this.router.navigate(["/products"])
  }

}
