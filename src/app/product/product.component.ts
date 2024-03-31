import { Component } from "@angular/core";



@Component({
    selector: "app-product",
    templateUrl:"./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent{
    public productName:string="Iphone-15"
    public productId:number=1234

    resp:string=`<p class="alert alert-info">`

    userName:string="karan";

    imgUrl="https://media.istockphoto.com/id/1320639759/photo/word-angular-on-paper-and-laptop.jpg?s=1024x1024&w=is&k=20&c=YqFHGR5Ii1CrvJdwRfxgWbuvZ34ZA-U7q-WCm9ELfvU="
}

//Component >> our own html Element