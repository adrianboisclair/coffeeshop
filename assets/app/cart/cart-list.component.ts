import { Component, OnInit } from "@angular/core";

import { Cart } from "./cart.model";
import { CartService } from "./cart.service";

@Component({
    selector: 'app-cart-list',
    template: `
        <div class="col-md-8 col-md-offset-2">

        </div>
    `
})
export class CartListComponent implements OnInit {
    carts: Cart[];

    constructor(private cartService: CartService) {}

    ngOnInit() {

        this.cartService.getCart('CM001')
            .subscribe(
                (carts: Cart[]) => {
                    this.carts = carts;
                }
            );
    }
}