import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
//Importamos librería observable, para permitirnos conocer cuando ha sido modificado
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //Definir nuevos métodos para llamar a las tareas
  getTasks(): Observable <Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
