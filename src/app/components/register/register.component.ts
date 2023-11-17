import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}
  onSubmit(data: any) {
    this.http
      .post('https://backend-calle-once.vercel.app/api/auth/register', data)
      .subscribe((result) => {
        console.log('result', result);
      });
  }
}
