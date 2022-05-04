import { Component, OnInit } from '@angular/core';
import { tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  listTareas:tarea[]=[];
  nombreTarea='';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //crear un objeto tarea
    const tareas:tarea={
      nombre:this.nombreTarea,
      estado:false
    }

    //agregar el objeto tarea al array
    this.listTareas.push(tareas);

    //resetear input
    this.nombreTarea='';
  }

  eliminarTarea(index:number):void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tareas:tarea, index:number):void{
    this.listTareas[index].estado=!tareas.estado;
  }

}
