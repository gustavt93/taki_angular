import { Component, OnInit } from '@angular/core';
import { TakiService } from './../../service/taki.service';

@Component({
  selector: 'tk-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public getData;

  constructor(private http: TakiService) { }

  ngOnInit() { }

  public GetData() {
    const retVal = this.http.getUsuario().subscribe((data) => {
      console.log(data);
      this.getData = data;
    })
  }
}
