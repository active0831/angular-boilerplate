import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People, people } from '../people';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  people: People | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    // First get the people id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const peopleIdFromRoute = Number(routeParams.get('peopleId'));
  
    // Find the people that correspond with the id provided in route.
    this.people = people.find(people => people.id === peopleIdFromRoute);
  }

  addToCart(people: People) {
    this.cartService.addToCart(people);
    window.alert('Your people has been added to the cart!');
  }

}