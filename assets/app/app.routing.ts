import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/shoppingcart/CM101', pathMatch: 'full'},
    {path: '', redirectTo: '/shoppingcart', pathMatch: 'full'},
    {path: 'shoppingcart/:sku', component: CartComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);