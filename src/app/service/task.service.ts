import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
//Importamos librería observable, para permitirnos conocer cuando ha sido modificado
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks' //Dirección del json-server


  constructor(
    private http:HttpClient // Inicializar el método HttpClient
  ) { }

  //Definir nuevos métodos para llamar a las tareas
  getTasks(): Observable <Task[]> {

/*    const tasks = of(TASKS);
    return tasks;*/

return this.http.get<Task[]>(this.apiUrl)

  }
}
