import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async loginGoogle() {
    let error = await this.auth.googleLogin();

    if(error == undefined){
      this.router.navigate(['home'])
    }else{
      alert(JSON.stringify(error))
    }
  }
}
