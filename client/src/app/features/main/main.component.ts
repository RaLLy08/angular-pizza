import { Component } from '@angular/core';


@Component({
    selector: 'features-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ]
})
 
export class MainComponent { 
    switcherWidth = '1280px';
    slidesImgsSrc: Array<string> = [
        'app/assets/images/switcherimg1.png',
        'app/assets/images/switcherimg2.png',
        'app/assets/images/switcherimg3.png',
    ];
}