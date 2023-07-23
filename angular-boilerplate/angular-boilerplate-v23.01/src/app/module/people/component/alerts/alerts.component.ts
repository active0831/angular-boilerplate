import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { People } from '../../people';

@Component({
  selector: 'component-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  @Input() people: People | undefined;
  @Output() notify = new EventEmitter();
}
