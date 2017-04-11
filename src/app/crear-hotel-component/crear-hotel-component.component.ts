import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Hotel } from '../models/hotel';
@Component({
  selector: 'app-crear-hotel-component',
  templateUrl: './crear-hotel-component.component.html',
  styleUrls: ['./crear-hotel-component.component.css']
})
export class CrearHotelComponentComponent implements OnInit {

  public hotelACrear:Hotel;

  constructor(private http:Http) {
    this.hotelACrear = new Hotel();
   }

  ngOnInit() {
  }

  saveHotel() {
    this.http.post(
      "http://localhost/hoteles/server/data.php",
      this.hotelACrear
    ).subscribe((response)=>{
      console.log(response);
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Hotel guardado con éxito');
      }
      else{
        alert("Hubo un error al guardar el hotel");
      }
    });
  }

}
