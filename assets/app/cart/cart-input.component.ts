import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CartService } from "./cart.service";
import { Cart } from "./cart.model";

@Component({
    selector: 'app-cart-input',
    templateUrl: './cart-input.component.html'
})
export class CartInputComponent implements OnInit {
    cart: Cart;

    constructor(private cartService: CartService) {}

    onSubmit(form: NgForm) {
        if (this.cart) {
            // Edit
            this.cart.sku = form.value.sku;
            this.cartService.updateCart(this.cart)
                .subscribe(
                    result => console.log(result)
                );
            this.cart = null;
        } else {
            // Create
            const cart = new Cart(form.value.sku);
            this.cartService.addCart(cart)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.cart = null;
        form.resetForm();
    }

    ngOnInit() {
        this.cartService.cartIsEdit.subscribe(
            (cart: Cart) => this.cart = cart
        );
    }
}