import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: [ './switcher.component.scss' ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class SwitcherComponent { 
    @Input()
    swithcherImgsSrc: Array<string> = [];
    @Input()
    autoNextSlideDelay: number = 10000;
    @Input()
    itemWidth: string = "400px"

    autoChangeInterval: ReturnType<typeof setInterval> | undefined; 
    itemsCount: number
    itemsWidth: string;
    leftShift: string = "0px"
    currentSlide: number = 0;

    private startAutoNextSlide() {
        this.autoChangeInterval = setInterval(() => this.toNext(), this.autoNextSlideDelay)
    }

    private stopAutoNextSlide() {
        clearInterval(this.autoChangeInterval);
    }

    private restartAutoNextSlide() {
        this.stopAutoNextSlide();
        this.startAutoNextSlide();
    }

    ngOnInit() {
        this.itemsCount = this.swithcherImgsSrc.length;
        this.itemsWidth = parseInt(this.itemWidth) * this.itemsCount + 'px';
        
        this.startAutoNextSlide();
    }

    ngOnDestroy() {
        this.stopAutoNextSlide();
    }

    onPrev() {
        this.toPrev();
        this.restartAutoNextSlide();
    }

    onNext() {
        this.toNext();
        this.restartAutoNextSlide();
    }

    onCertain(index: number) {
        this.goToSlide(index);
        this.restartAutoNextSlide();
    }

    private toPrev(){
        this.currentSlide -= 1;
        if (this.currentSlide < 0) {
            this.goToSlide(2);
        } else {
            this.goToSlide(this.currentSlide);
        }
    }

    private toNext(){
        this.currentSlide += 1;
        if (this.currentSlide > 2) {
            this.goToSlide(0);
        } else {
            this.goToSlide(this.currentSlide);
        }
    }

    private goToSlide(index: number) {
        this.leftShift = -(parseInt(this.itemWidth) * index) + 'px';
        this.currentSlide = index;
    }
}