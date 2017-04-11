import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Hotel } from './models/hotel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hoteles!';
  hotelesList:Array<Hotel> = new Array<Hotel>();
  dataHotel:Hotel;

  constructor(private http:Http){

  }

  listarHoteles(){
    this.http
    .get("http://localhost/hoteles/server/data.php")
    .subscribe((response)=>{
      this.hotelesList = response.json();
      console.log(this.hotelesList);
      let modalHoteles = document.getElementById("modal_listado_hoteles");
      modalHoteles.style.visibility = "visible";
    });
  }

}
