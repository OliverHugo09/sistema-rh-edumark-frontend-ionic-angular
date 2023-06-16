import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  password: string = '';
  showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
