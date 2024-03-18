import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Product } from "../Model/product.model";



@Injectable({providedIn:"root"})
export class ProductService{
    constructor(private http:HttpClient){ }

    ngOnInit(){}

    createproduct(product){
       return this.http.post('https://productmanagerbyssj-default-rtdb.firebaseio.com/products.json',product)
    }
    getProducts(){
        return this.http.get('https://productmanagerbyssj-default-rtdb.firebaseio.com/products.json')
        .pipe(map((res)=>{
            const products=[];  
            for(const key in res){
              if(res.hasOwnProperty(key)){
                products.push({...res[key],id:key})
              }
              }
              return products
            }))

    }
    deleteProduct(id:string){
        return this.http.delete('https://productmanagerbyssj-default-rtdb.firebaseio.com/products/'+id+'.json')

    }
    getProductbyId(id:string){
       return this.http.get<Product>('https://productmanagerbyssj-default-rtdb.firebaseio.com/products/'+id+'.json')


    }


    editProduct(id,value){
        return this.http.put('https://productmanagerbyssj-default-rtdb.firebaseio.com/products/'+id+'.json',value)
        
    }
}