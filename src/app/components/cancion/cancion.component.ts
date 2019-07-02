import { Component, OnInit } from '@angular/core';
import { TakiService } from './../../service/taki.service';

@Component({
  selector: 'tk-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  public getData;

  constructor(private http: TakiService) {
    this.GetCancion();
   }

  ngOnInit() {
  }

  public GetCancion() {
    const retVal = this.http.getUsuarioById(0).subscribe((data) => {
      console.log(data);
      this.getData = data;
    })
  }
}
