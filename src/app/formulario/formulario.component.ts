import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  messageService = {
    add:[]; 
  }
  
  mostrar_en_consola(name:string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    console.log(name);
  }


}
