import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  constructor(private productservice:ProductsService){}
  pro:any=this.productservice.products;
  dataSource = this.pro;
  ngOnInit(){
    // this.productList()
  }

   ELEMENT_DATA!:Product[];
   productList(){
    return this.productservice.productList()
    
  }


  deleteProduct(product :any){
    


    console.log(product)
    this.productservice.delete(product)
    console.log(product)
  //   console.log(product)
  // product =this.productservice.delete(product.id);
  // console.log(product)
   

  //   this.productservice.products.forEach((product,index) =>{

  //     // console.log(`${id.id}-`+`${index}`)
  //     // console.log(id.id)

  //   // this.productservice.products.( id,1)
  //   console.log(product[index])
  //   this.productservice.products.splice(product[index],1)
  //   console.log(product)
    
  //   })
    
  }

  displayedColumns: string[] = ['id', 'name', 'price', 'description','actions'];

//   ngOnInit(): void {
//     this.fetchProducts();
//     this.dataSource
//     console.log(this.dataSource)
//   }

//   fetchProducts(){
//     // this.productservice.getAllProducts()
//     // .subscribe(products => {
//     //   this.products=products;
//     // })

//  this.pro=  this.productservice.productList()

    
//     console.log(this.productservice.productList())
//   } 
 
//   deleteProduct(id:string){
//     return this.productservice.deleteProduct(id)
//     .subscribe(rta =>{
//      console.log(rta) ;
//      this.fetchProducts();
//     })
//   }
}
