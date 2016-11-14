import { Component } from '@angular/core';
import { CartService } from "./cart/cart.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CartService]
})
export class AppComponent {

}