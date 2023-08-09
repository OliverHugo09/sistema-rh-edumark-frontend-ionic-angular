import { Component, OnInit } from '@angular/core';
import { LoginEntidadService } from '../../../../client/connection/secure/login-entidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss'],
})
export class CompanySidebarComponent implements OnInit {
  showLoading: boolean = false;
  constructor(private logoutService: LoginEntidadService, private router: Router) { }

  ngOnInit() { }

  logout(): void {
    this.logoutService.logout()
  }

  navigateToAddBlog() {
    this.showLoading = true; // Muestra la pantalla de carga
    // Navega a la ruta correspondiente
    this.router.navigate(['', 'admin-panel', 'empresa-blogs']).then(() => {
      // Recarga la página

      // Puedes agregar un pequeño retraso para que la animación de carga sea visible
      setTimeout(() => {

        this.showLoading = false; // Oculta la pantalla de carga
        window.location.reload();
      }, 500); // 500ms de retraso
    });

  }

  CompanyData() {
    this.showLoading = true; // Muestra la pantalla de carga
    // Navega a la ruta correspondiente
    this.router.navigate(['', 'admin-panel', 'empresa-editar']).then(() => {

      // Puedes agregar un pequeño retraso para que la animación de carga sea visible
      setTimeout(() => {
        this.showLoading = false; // Oculta la pantalla de carga
        // Recarga la página
        window.location.reload();
      }, 500); // 500ms de retraso
    });
  }

}
