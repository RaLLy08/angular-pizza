import { Component } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
    selector: 'pages-products',
    templateUrl: './products.component.html',
    styleUrls: [ './products.component.scss' ],
    // providers: [ ProductsService ]
})

export class ProductsComponent { 
    constructor(private productsService: ProductsService){}
    products: Array<any> = []
    productPlaceholderSrc: string = "https://dodopizza-a.akamaihd.net/site-static/dist/611f501db3a3369fac31.svg";


    ngOnInit(){
        this.productsService.getProducts().subscribe(products => {
            this.products = products;
        });
    }
}