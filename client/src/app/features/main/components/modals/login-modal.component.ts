import { ModalService } from 'core/services/modal.service';
import { NgForm } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { Modals } from './../../models/modals';


@Component({
    selector: 'login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: [ './login-modal.component.scss' ],
    // providers: [ AuthService ]
})

export class LoginModalComponent { 
    constructor(private modalService: ModalService, private authService: AuthService) { }
    modalId = Modals.LOGIN_MODAL_ID;
    name: string = "";
    phoneFocusClass: boolean = false;
    passwordFocusClass: boolean = false;
    @ViewChild('formdata') loginForm: NgForm;

    ngOnInit() {
        // this.g =         this.authService.login(form.value).subscribe(res => {
        //     console.log(res);
            
        // })
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    onSubmit = (form: NgForm) => {

    }
}