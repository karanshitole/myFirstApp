import { Component } from "@angular/core";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",
    styleUrls:["./products.component.scss"]
})

export class ProductsComponent {
    ProductName:string ="Samsung";
    ProductId:number=12314;
}