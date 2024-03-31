import { Component, OnInit } from "@angular/core";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",
    styleUrls:["./products.component.scss"]
})

export class ProductsComponent implements OnInit {
    ProductName:string ="Samsung";
    ProductId:number=123;
    isproductavaible !:boolean
  

    ngOnInit(): void {
        this.isproductavaible=(Math.random()>.5?true:false)
    }

    getBgColor(){
        // if(this.isproductavaible){
        //     return "Green"
        // }else{
        //     return "red"
        // }
        return this.isproductavaible? 'green':'#ccc'
    }
}