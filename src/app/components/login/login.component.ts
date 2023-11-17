import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = ''; // Variable para almacenar el mensaje de error
  successMessage: string = ''; // Variable para almacenar el mensaje de éxito

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(data: any) {
    this.http
      .post('https://backend-calle-once.vercel.app/api/auth/login', data)
      .subscribe(
        (result: any) => {
          console.log('result', result);
          // Guardar token en localStorage
          localStorage.setItem('accessToken', result.accessToken);

          // Asignar el mensaje de éxito
          this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...';

          // Después de 2 segundos, redirigir a otra ventana
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        (error) => {
          console.error('Error en la solicitud HTTP', error);

          // Asignar el mensaje de error
          this.errorMessage =
            'Error en la autenticación. Verifica tus credenciales.';
        }
      );
  }
}
