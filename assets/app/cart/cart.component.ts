import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Cart } from "./cart.model";
import { CartService } from "./cart.service";
import {EventEmitter} from "events";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        img {
            height: auto;
            width: 44px;
        }
    `]
})
export class CartComponent implements OnInit, OnDestroy {
    @Input() cart: Cart;

    private subscription: Subscription;

    shoppingCart: any = [];
    itemSku : string;
    cartQuantity : any;
    name : string;
    relatedItems: any = [];
    cartItemSku: string;
    cartSku: any;
    sub: any;
    imageSrc: string = '../../images/coffee_pod_001.png';

    constructor(private cartService: CartService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.getCart();
    }

    onEdit() {
        console.log('onEdit');
        this.cartService.editCart(this.cart)
    }
    setCartItemSku(sku) {
        console.log(sku);
        this.cartItemSku = sku;
    }
    getCart() {
        this.sub = this.route.params.subscribe(params => {
            this.cartSku = params['sku']; // (+) converts string 'id' to a number
            console.log(this.cartSku);
            let sku = this.cartSku;
            this.cartService.getCart(sku)
                .subscribe(
                    result => {
                        this.shoppingCart = result;
                        this.itemSku = result.sku;
                        this.name = result;
                        this.cartQuantity = 1;
                        this.shoppingCart = result
                        return result;
                    }
                );
        });
    }
    getRelated(sku) {
        this.cartService.getRelated(sku)
            .subscribe(
                result => {
                    this.relatedItems = result;
                    console.log(this.relatedItems[0]);
                    return this.relatedItems;
                }
            );
    }

    onDelete() {
        this.cartService.deleteCart(this.cart)
            .subscribe(
                result => { this.shoppingCart = result; return this.shoppingCart; }
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}