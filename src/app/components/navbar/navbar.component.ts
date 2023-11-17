import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn(): boolean {
    // Verifica si el token de acceso está presente en localStorage
    return !!localStorage.getItem('accessToken');
  }
}
