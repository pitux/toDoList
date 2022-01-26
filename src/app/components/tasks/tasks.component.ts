import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
//Importamos el servicio
import { TaskService } from 'src/app/service/task.service';
//Importamos servicio de iconos
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tareas: Task[]= [];
  faTimes = faTimes;

  constructor( 
    private taskService: TaskService //Inicializar el servicio
    ){ }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => (
      this.tareas = tasks
    )); //Llamar al servicio
  }

}
