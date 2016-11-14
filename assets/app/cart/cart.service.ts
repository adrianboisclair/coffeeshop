import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Cart } from "./cart.model";
import {toArray} from "rxjs/operator/toArray";

@Injectable()
export class CartService {
    private carts:Cart[] = [];
    private related:any = [];
    cartIsEdit = new EventEmitter<Cart>();

    constructor(private http:Http) {
    }

    addCart(cart:Cart) {
        const body = JSON.stringify(cart);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/cart', body, {headers: headers})
            .map((response:Response) => {
                const result = response.json();
                const cart = new Cart(result.obj.sku);
                //const cart = new Cart('test', 'test');
                this.carts.push(cart);
                return cart;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }

    getCart(sku:string) {
        return this.http.get('http://localhost:3000/cart/' + sku)
            .map((response:Response) => {
                const item = response.json().obj;
                this.carts = item;
                return item;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }

    getRelated(sku:string) {
        return this.http.get('http://localhost:3000/cart/related/' + sku)
            .map((response:Response) => {
                const item = response.json().obj;
                this.related = item;
                return item;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }

    editCart(cart:Cart) {
        this.cartIsEdit.emit(cart);
    }

    updateCart(cart:Cart) {
        const body = JSON.stringify(cart);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/cart/' + cart, body, {headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }

    deleteCart(cart:Cart) {
        this.carts.splice(this.carts.indexOf(cart), 1);
        return this.http.delete('http://localhost:3000/cart/' + cart)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
}