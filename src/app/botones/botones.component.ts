import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})

export class BotonesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text_color:string = ''; 
  button_disabled:boolean = false;
  text_button:string = 'Desactivar'

  buttonDisable() {
    this.button_disabled = !this.button_disabled
    if (this.button_disabled) {
      this.text_button='Activar'
     } else {
      this.text_button='Desactivar'
     }
  }

}
