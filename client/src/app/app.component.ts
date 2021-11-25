import { Modals } from './features/main/models/modals';
import { Component } from '@angular/core';
import { ModalService } from 'core/services/modal.service';

// class Item{
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
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})

export class AppComponent { 
    constructor(private modalService: ModalService) { }
    loginModalId: string = 'login-modal';

    ngOnInit() {
    }

    openLoginModal() {
        this.modalService.open(Modals.LOGIN_MODAL_ID);
    }

    onLogin = () => {
        this.openLoginModal()
    }
}