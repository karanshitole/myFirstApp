import { Component, OnInit } from "@angular/core";



@Component({
    selector: "app-product",
    templateUrl:"./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit{
    public productName:string="Iphone-15"
    public productId:number=123
    isProdAviable !:boolean;

    resp:string=`<p class="alert alert-info">`

    userName:string="karan";

    imgUrl="https://media.istockphoto.com/id/1320639759/photo/word-angular-on-paper-and-laptop.jpg?s=1024x1024&w=is&k=20&c=YqFHGR5Ii1CrvJdwRfxgWbuvZ34ZA-U7q-WCm9ELfvU="
    ngOnInit(): void {
        this.isProdAviable=(Math.random()>.5)?true:false
    }
}

//Component >> our own html Element