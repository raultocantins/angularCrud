import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
product:Product={
  name:'',
  price:null
}
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
const id=this.route.snapshot.paramMap.get('id')
this.productService.readById(id!).subscribe((data)=>this.product=data)
  }

  delete(){
   
    this.productService.delete(`${this.product.id}`).subscribe((_)=>{
      this.productService.showMessage("Produto deletado !")
      this.router.navigate(["/products"])
      })
  }
cancel(){
  this.router.navigate(["/products"])
}
}
