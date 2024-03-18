import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{
  selectedProductId:string='';
  selectedProduct:any;
  isFetching:boolean=false;

  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router){}

  ngOnInit(){
    this.isFetching=true;
    this.selectedProductId=this.route.snapshot.paramMap.get('id');
    if(this.selectedProductId){
      this.productService.getProductbyId(this.selectedProductId).subscribe((res)=>{
        this.selectedProduct=res
        this.isFetching=false
      })
    }

  }
  viewEdit(id){
    this.router.navigate(['editproduct',this.selectedProductId])
  }


}
