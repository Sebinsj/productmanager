import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {

  constructor(private productService:ProductService){

  }


  productForm: FormGroup 
  ngOnInit(){
    this.productForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      desc:new FormControl(null,Validators.required),
      price:new FormControl(null,Validators.required),
    })
  }


  onAddProduct(product:{price:string,name:string,desc:string})
  {
    console.log(product);
    this.productService.createproduct(product).subscribe((res)=>{
      console.log(res);
      
    });
    

  }
}
