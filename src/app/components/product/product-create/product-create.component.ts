import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
nome: string='';
id:string='par';
  constructor() { }

  ngOnInit(): void {
  }
  fazerAlgo():void{
   alert('fazendo algo') 
  }
  

}
