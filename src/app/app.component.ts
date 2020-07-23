import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  user: Observable<any>

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
  ) {
    //this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.auth.getCurrentUser().then(user => {
        console.log(user);

        this.user=this.auth.user

        //Si esta autentificado se va a home
        if(user){
          this.router.navigate(['home'])
        }else{
          this.router.navigate(['login'])
        }
      });
    });
  }

  async logout(){
    await this.auth.logout()
    this.router.navigate(['login'])
  }
}
