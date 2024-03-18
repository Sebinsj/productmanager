import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent implements OnInit{
  isFetching:boolean=false;
  allProducts:Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit() {
    this.fetchProducts();
      
  }
  private fetchProducts(){
    this.isFetching=true
    this.productService.getProducts().subscribe((products)=>{
      this.allProducts=products;
      console.log(this.allProducts);
      
      this.isFetching=false
    })

  }

}
