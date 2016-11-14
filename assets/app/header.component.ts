import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                Select a Product to "Add to your cart",  then view Suggested Products Below
            </div>
        </div>
    </nav>
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-pills">
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM001']">Small Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM002']">Small Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM003']">Small Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM101']">Large Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM102']">Large Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/CM103']">Large Coffee Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/EM001']">Espresso Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/EM002']">Espresso Machine</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/shoppingcart/EM003']">Espresso Machine</a></li>
            </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}