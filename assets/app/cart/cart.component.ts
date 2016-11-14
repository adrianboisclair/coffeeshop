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
            width: 100px;
            display: block;
            margin: 0 auto;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            box-shadow: 0px 1px 5px lightgray;
            float: left;
            height: 250px;
            margin: 10px;
            text-align: center;
            width: 45%;
        }
    `]
})
export class CartComponent implements OnInit, OnDestroy {
    @Input() cart: Cart;

    private subscription: Subscription;

    shoppingCart: any = [];
    itemSku : string;
    cartQuantity : any;
    relatedItems: any = [];
    cartItemSku: string;
    cartSku: any;
    sub: any;
    rel: any;
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
                        this.cartQuantity = 1;
                        this.shoppingCart = result;
                        this.getRelated();
                        return result;
                    }
                );
        });
    }
    getRelated() {
        console.log('getRelated', this.cartSku);
        this.sub = this.route.params.subscribe(params => {
            //console.log(this.cartSku);
            let sku = this.cartSku;
            this.cartService.getRelated(sku)
                .subscribe(
                    result => {
                        console.log(result);
                        return this.relatedItems = result;
                    }
                );
        });
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