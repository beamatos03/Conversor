import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
    valor : number = 0;
  resultado  : string = "";

  
   milimetro(){
    var res = this.valor*10;
    this.resultado = this.valor + " cm equivalem a " + res.toFixed(2) + " milímetros";
   }
   metro(){
    var res = this.valor/100;
    this.resultado = this.valor + "cm equivalem a " + res.toFixed(2) + " metros";
   } 
   polegada(){
    var res = this.valor/2.54;
    this.resultado = this.valor + "cm equivalem a " + res.toFixed(2) + " polegadas";
   } 
  
  
  }