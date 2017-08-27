import { Component, OnInit } from '@angular/core';
import { AuthLogoutService } from '../../services';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class AuthLogoutComponent implements OnInit {

  constructor(private auth: AuthLogoutService) { }

  ngOnInit() {
    this.auth.logout();
  }

}
