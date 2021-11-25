import { NavbarItems } from './../../models/navbar';
import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';


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
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
 
export class NavbarComponent { 
    logosmallImgSrc: string = 'app/assets/images/dodologosmall.png'

    constructor(private elRef: ElementRef) {}
    private appNavbar: HTMLElement;

    @HostBinding('class.nav-sticky') navStiky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const { y } = this.appNavbar.getBoundingClientRect();
        
        if (y === 0) {
            this.navStiky = true;
        } else {
            this.navStiky = false;
        }
    }


    ngAfterViewInit() {
        this.appNavbar = this.elRef.nativeElement;
    }

    navbarItems = Object.values(NavbarItems);
}