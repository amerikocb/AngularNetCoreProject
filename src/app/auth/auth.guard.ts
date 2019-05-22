import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus:IAuthStatus;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = (this.authService.getAuthStatus()))
    );
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkPermissions(next);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermissions(next);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  protected checkLogin(){
    if(this.authService.getToken() == null || this.authService.getToken() === ''){
      alert('You must login to continue');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  protected checkPermissions(route?: ActivatedRouteSnapshot){
    let roleMatch = true;
    if(route){
      const expectedRole = route.data.expectedRole;
      if(expectedRole){
        roleMatch = this.currentAuthStatus.role === expectedRole;
      }
    }

    if(!roleMatch){
      alert('You do not have the permissions to view this resource');
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
