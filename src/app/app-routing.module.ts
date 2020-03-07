import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { OffersComponent } from './offers/offers.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { SecurityProtectionService } from './service/security-protection.service';
import { RedirectMeComponent } from './redirect-me/redirect-me.component';


const routes: Routes = [
  {path: '', component : BodyComponent},
  {path: 'login', component : LoginComponent},
  {path: 'body', component : BodyComponent},
  {path: 'offer', component : OffersComponent, canActivate:[SecurityProtectionService]},
  {path: 'help', component : HelpComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'logout', component : LogoutComponent},
  {path: 'randi/:name', component : RedirectMeComponent},
  {path: '**', component : ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
