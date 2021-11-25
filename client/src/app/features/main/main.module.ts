import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SwitcherComponent } from './../../shared/components/switcher/switcher.component';
import { ProductsComponent } from './pages/products.component';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        MainComponent,
        ProductsComponent,
        SwitcherComponent
    ],
    imports: [ CommonModule, HttpClientModule  ],
    exports: [ MainComponent ]
})

export class MainModule { }