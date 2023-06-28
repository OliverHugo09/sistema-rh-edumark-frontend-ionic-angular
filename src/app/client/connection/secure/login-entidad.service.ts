import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginEntidadService {
  private loginUrl = 'http://45.55.66.121/entidad/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(correo: string, password: string): Promise<boolean> {

    this.logout();
    return this.http.post<any>(this.loginUrl, { correo, password })
      .toPromise()
      .then(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('secretKey', environment.SECRET_KEY);
          this.router.navigate(['admin-panel']);
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('secretKey');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const secretKey = localStorage.getItem('secretKey');
    return token !== null && secretKey === environment.SECRET_KEY;
  }
}
