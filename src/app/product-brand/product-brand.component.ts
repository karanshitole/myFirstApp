import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/models/product';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
productArr:Array<Iproduct>=[
{
  productName:'iphone-15',
  productInfo:"The iPhone 15 display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)",
  productUrl:'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aSUyMHBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D'
},
{
  productName:'Whatch',
  productInfo:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
  productUrl:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToFYh233z_vQ3IR_KAwKUmyeNeajhSnUC-rysMCoBSGvewVzd4TogMwjlLZRK9-tyjZm4Ch0ynoPVRw2KtB3RyNKjmZGKBUT4spLIU4Hl3MfyCD2_SqK8pzQ'
}
]
  constructor() { }

  ngOnInit(): void {
  }
  productAdd(productName:HTMLInputElement,productInfo:HTMLTextAreaElement,productUrl:HTMLInputElement){
    let productObj={
      productName:productName.value,
      productInfo:productInfo.value,
      productUrl:productUrl.value,
    }
    console.log(productObj);
    productName.value=productInfo.value=productUrl.value=''
    this.productArr.push(productObj)
  }

}
