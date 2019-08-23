import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarModule} from './core/master-page/navbar/navbar.module';
import {FooterModule} from './core/master-page/footer/footer.module';
import {SidebarModule} from './core/master-page/sidebar/sidebar.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ConfirmDialogCustomModule} from './shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';
import {GrowlModule} from './ui-common/growl/growl';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/showcase/data/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        ConfirmDialogCustomModule,
        GrowlModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
