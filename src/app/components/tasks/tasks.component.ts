import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

//Importamos el servicio
import { TaskService } from 'src/app/service/task.service';

//Importamos servicio de iconos
//import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Mock de actividades
//import { TASKS } from 'src/app/mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[]= [];

//  faTimes = faTimes;

  constructor( 
    private taskService: TaskService //Inicializar el servicio
    ){ }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe((tasks) => (
      this.tasks = tasks
    )); //Llamar al servicio
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>[
      this.tasks = this.tasks.filter ( t => t.id !== task.id ) //Devolvemos la que no coincida con la que marcamos
    ])
  }
  toogleReminder(task:Task){
    task.reminder = !task.reminder;
    console.log(task)
    this.taskService.updateTaskReminder(task).subscribe(); // Le pasamos a nuestro servicio la tarea a update
  }

  addTask(task:Task){
    console.log(task);
    this.taskService.addTask(task).subscribe((task => 
        this.tasks.push(task)
      ))
  }
}
