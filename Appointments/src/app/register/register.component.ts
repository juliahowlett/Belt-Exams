import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
 user: User = new User();

  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    //console.log(request.json)
    this.auth.register(this.user)
      .then(() => this.router.navigate(['dashboard']))
      .catch(response => this.handleErrors(response.json()));
  }
  
  private handleErrors(errors: string[] | Error): void {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors.message];
  }
  
  ngOnInit() {
  }

}

