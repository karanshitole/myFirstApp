import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";




@Component({
    selector :"app-post",
    templateUrl:"./post.component.html",
    styleUrls:["./post.component.scss"]
})

export class PostComponent implements OnInit{
 isDisabled:boolean=true;
 productCount:number=0;
 productAddStatus: string =`No Product is added Yet !!`
 searchProd:string=''
 @ViewChild("GetProduct")GetProduct !:ElementRef
constructor(){
    console.log(`Products Constructer is called !!!`)
}
 ngOnInit(): void {
    setTimeout(() => {
        this.isDisabled=false;
    }, 2000);
 }

 getProductStatus(){
    console.log(`Product is Added`);
    this.productAddStatus=`${this.productCount} Product are in cart !!!`
    this.productCount++;
 }
 removeProduct(){
    this.productCount--;
    if(this.productCount<1){
        this.productAddStatus=`No Product is added in cart Yet!!`
    }else{
        this.productAddStatus=`${this.productCount} Product are in cart !!!`
        
    }
 }
 onProductSearch(eve:Event){
    let val = (eve.target as HTMLInputElement).value;
    console.log(val)
    this.searchProd=val;
 }

 onGetProduct(ele:HTMLInputElement){
    console.log(ele);
    ele.value=''
 }
 onGetproduct1(){
    console.log(this.GetProduct.nativeElement.value);
    
 }
}