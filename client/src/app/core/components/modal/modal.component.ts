import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({ 
    selector: 'modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() onDocumentClose: boolean = true;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {        
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        
        document.body.appendChild(this.element);

        if (this.onDocumentClose) {
            this.element.addEventListener('click', el => {
                if (el.target === this.element) {
                    this.close();
                }
                
            });
        }
 
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'flex';
        document.body.classList.add('hide-scroll');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('hide-scroll');
    }
}
