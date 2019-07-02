import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TakiService } from './../../service/taki.service';

@Component({
  selector: 'tk-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  private mediaMatcher: MediaQueryList = matchMedia('(max-width: 720px)');

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );
  public getData;
  public email;
  public password;

  constructor(private http: TakiService) {
    // this.GetData();
  }

  ngOnInit() {

  }

  pantallaSmall() {
    // matches retorna true, cuando la pantalla es menor o igual a 720
    return this.mediaMatcher.matches;
  }

  public Email() {
    
    let objeto = {
      email: this.email,
      password: this.password
    }

    this.http.Login(objeto).subscribe((data) => {
      this.GetData(data.uid);
    });
  }

  public GetData(id: any) {
    const retVal = this.http.getUsuarioById(id).subscribe((data) => {
      this.getData = data;
      console.log(this.getData);
    })
  }
}
