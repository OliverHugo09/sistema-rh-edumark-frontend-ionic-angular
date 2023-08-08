import { Component, OnInit } from '@angular/core';
import { IonMenu, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {
    this.menuController.enable(true, 'mainMenu'); // Habilitar el menú por defecto al cargar el componente
  }

  onMenuButtonClick() {
    this.menuController.toggle('mainMenu');
  }

  onLogoutButtonClick() {
    // Agrega la lógica para cerrar sesión aquí (si es necesario)
    localStorage.clear();
    // Redirige a la ruta raíz
    this.router.navigate(['']);
  }

}