import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  public saludo = 'Fernando';
  public myId= 'saludoId';
  public isDisabled = true;

  public mensaje = '';

  public presionado = '';

  public accion='mostrar';
  public mostrar=false;

  public color ='blue';

  public elems=['red','blue','green','yellow'];

  constructor() { }

  ngOnInit(): void {
  }


  greetUser(){
    return "que tal "+this.saludo;
  }

  onClick(event){
    console.log(event);
    this.presionado = 'Has presionado en el boton';
  }

  presionar(event){
    if(this.mostrar){
      this.accion='ocultar';
    }else{
      this.accion='mostrar'
    }
    this.mostrar=!this.mostrar;
  }


}
