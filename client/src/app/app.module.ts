import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainModule } from './features/main/main.module';
import { ModalModule } from './core/components/modal/modal.module';
import { APIInterceptor } from './core/interceptors/api.interceptor';
import { AccessTokenInterceptor } from './core/interceptors/access-token.interceptor';
import { LoginModalComponent } from './features/main/components/modals/login-modal.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, MainModule, ModalModule ],
    declarations: [ AppComponent, HeaderComponent, NavbarComponent, FooterComponent, LoginModalComponent ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AccessTokenInterceptor,
            multi: true
        },
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }