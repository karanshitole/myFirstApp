import { Component, OnInit } from '@angular/core';
import { ImobileProduct } from '../../models/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  specification:Array<string>=["128 GB ROM6 GB RAM | 128 GB ROM  Expandable Upto 1 TB","17.25cm (6.79 inch)Full HD+ Display",
  "50MP + 2MP 8MP Front Camera",
  "5000 mAh Battery",
  "Snapdragon 4 Gen 2 Processor"];

  mobileprice:Array<string>=["₹12,200","₹17,999  27%off","Free delivery","Save extra with combo offers"]

 mobileProducts :Array<ImobileProduct>= [
      {
        id: 1,
        name: 'iPhone 13',
        brand: 'Apple',
        price: 999,
        image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
        isAvailable: true,
        rating:6.5
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        brand: 'Samsung',
        price: 899,
        image: '',
        isAvailable: false,
        rating:2.5
      },
      {
        id: 3,
        name: 'Google Pixel 6',
        brand: 'Google',
        price: 799,
        image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
        isAvailable: true,
        rating:1.5
      },
      {
        id: 4,
        name: 'OnePlus 9 Pro',
        brand: 'OnePlus',
        price: 899,
        image: '',
        isAvailable: true,
        rating:3.5
      },
      {
        id: 5,
        name: 'Xiaomi Mi 11',
        brand: 'Xiaomi',
        price: 699,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
        isAvailable: true,
        rating:2.5
      },
      {
        id: 6,
        name: 'Sony Xperia 1 III',
        brand: 'Sony',
        price: 1199,
        image: '',
        isAvailable: true,
        rating:3.5
      },
      {
        id: 7,
        name: 'LG Velvet',
        brand: 'LG',
        price: 599,
        image: '',
        isAvailable: false,
        rating:4.5
      },
      {
        id: 8,
        name: 'Huawei P40 Pro',
        brand: 'Huawei',
        price: 899,
        image: '',
        isAvailable: true,
        rating:6.5
      },
      {
        id: 9,
        name: 'Motorola Moto G Power',
        brand: 'Motorola',
        price: 249,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
        isAvailable: false,
        rating:5.5
      },
      {
        id: 10,
        name: 'Nokia 8.3',
        brand: 'Nokia',
        price: 499,
        image: '',
        isAvailable: true,
        rating:4.6

      }
    
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
