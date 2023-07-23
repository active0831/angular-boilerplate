import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'component-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
