import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'list-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ListShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}