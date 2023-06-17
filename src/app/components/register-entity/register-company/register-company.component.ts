import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss'],
})
export class RegisterCompanyComponent  implements OnInit {

  password: string = '';
  showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
