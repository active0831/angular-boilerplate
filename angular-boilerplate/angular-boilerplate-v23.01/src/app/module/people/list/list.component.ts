import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { people } from '../people';

@Component({
  selector: 'app-module-people',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  people = [...people];

  share() {
    window.alert('The people has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the people goes on sale');
  }
}