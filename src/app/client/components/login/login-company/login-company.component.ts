import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginCompanyService } from '../../../connection/secure/login-company.service';


@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.scss'],
})
export class LoginCompanyComponent implements OnInit {
  correo: string;
  password: string;

  constructor(
    private loginService: LoginCompanyService,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  login(): void {
    if (!this.correo || !this.password) {
      // Mostrar un mensaje de error indicando que se deben ingresar el correo y la contraseña
      const alert = this.alertController.create({
        header: 'Error❌',
        subHeader: '¡Algo salió mal!',
        message: 'Debes ingresar el correo y la contraseña',
        buttons: ['OK'],
      }).then((alert) => {
        alert.present(); // Mostrar el alert
      });
      return; // Detener la ejecución de la función si no se han ingresado el correo y la contraseña
    }

    this.loginService.login(this.correo, this.password)
      .then(success => {
        if (success) {
        } else {
          // Manejo de errores al loguearse
          const alert = this.alertController.create({
            header: 'Error❌',
            subHeader: '¡Algo salió mal!',
            message: 'Correo o contraseña inválidos, vuelve a intentar',
            buttons: ['OK'],
          }).then((alert) => {
            alert.present(); // Mostrar el alert
          });
        }
      });
  }

}
