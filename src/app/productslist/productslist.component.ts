import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent implements OnInit{
  isFetching:boolean=false;
  allProducts:Product[]=[];

  constructor(private productService:ProductService,private route:Router){}

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
  onDeleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe((res)=>{
      this.fetchProducts()

    })
    
  }

  onEditProduct(id:string){
    this.route.navigate(['editproduct',id])
    
  }

  onViewProduct(id:string){
    this.route.navigate(['viewproduct',id])
  }


}
