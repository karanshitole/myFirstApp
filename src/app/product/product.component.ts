import { Component } from "@angular/core";



@Component({
    selector: "app-product",
    templateUrl:"./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent{
    public productName:string="Iphone-15"
    public productId:number=1234
}

//Component >> our own html Element