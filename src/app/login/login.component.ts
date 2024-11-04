import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule],
})
export class LoginComponent {
  private router = inject(Router);
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      sessionStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
