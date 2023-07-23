
import { Component,  Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  @Input() user = { pk: "", email: "" };

  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  login(): void {
    // Process checkout data here
    this.authService.login(this.checkoutForm.value);
    //this.checkoutForm.reset();
  }

  logout(): void {
    this.authService.logout();
  }
}




