import { HttpClient } from '@angular/common/http';
import { People } from '../people/people';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: People[] = [];
  constructor(
    private http: HttpClient
  ) {}

  addToCart(people: People) {
    this.items.push(people);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
