import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit {
  productFormEdit:FormGroup;

  selectedProductId:string='';
  selectedProduct:any;
  ProductId:string='';


  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router){
    this.productFormEdit=new FormGroup({
      name:new FormControl(null,Validators.required),
      desc:new FormControl(null,Validators.required),
      price:new FormControl(null,Validators.required),
    })
    

  }

  ngOnInit() {
    this.ProductId=this.route.snapshot.paramMap.get('id');
    console.log(this.ProductId);
    if(this.ProductId){
      this.productService.getProductbyId(this.ProductId).subscribe((res)=>{
        this.selectedProduct=res
        console.log(this.selectedProduct);
        this.selectedProductId=this.ProductId,
        
        
        this.productFormEdit.patchValue({
          
          name:this.selectedProduct.name,
          desc:this.selectedProduct.desc,
          price:this.selectedProduct.price,
        })


      })
    }
      
  }

  onEditProduct(){
    
    this.productService.editProduct(this.ProductId,this.productFormEdit.value).subscribe(()=>{
      this.router.navigate(['/'])
    })

  }

}
