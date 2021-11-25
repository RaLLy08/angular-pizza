import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';


// class Header {
//     purchase: string;
//     done: boolean;
//     price: number;
     
//     constructor(purchase: string, price: number) {
  
//         this.purchase = purchase;
//         this.price = price;
//         this.done = false;
//     }
// }
 
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent { 
    @Input() onLoginClick: () => void;
    
    city: string = "Москва";
    logoImgSrc: string = 'app/assets/images/dodologo.png'
}