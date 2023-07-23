
import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {

  @Input() user = { pk: "", email: "" };

  @Output() toggleMenuBarEvent = new EventEmitter();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  toggleMenuBar() {
    this.toggleMenuBarEvent.emit();
  }

  logout(): void {
    this.authService.logout();
  }

}




