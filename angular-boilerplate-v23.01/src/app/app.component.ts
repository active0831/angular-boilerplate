
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',

  animations: [
    trigger('toggleLeft', [
      state('closed', style({
        marginLeft: '-200px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
    trigger('toggleCenter', [
      state('closed', style({
        marginLeft: '0px',
        paddingLeft: '100px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user = { pk: '', email: '' };
  isMenuBarOpen = true;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getUser(
      (user:any)=>{this.user = user}
      )
  }

  toggleMenuBar() {
    this.isMenuBarOpen = !this.isMenuBarOpen;
    console.log(this.isMenuBarOpen);
  }
}



