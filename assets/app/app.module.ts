import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { CartListComponent } from "./cart/cart-list.component";
import { CartInputComponent } from "./cart/cart-input.component";
import { CartsComponent } from "./cart/carts.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        CartListComponent,
        CartInputComponent,
        CartsComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}