import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
//Importamos librería observable, para permitirnos conocer cuando ha sido modificado
import { Observable, of } from 'rxjs';


const HttpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}


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
    return this.http.get<Task[]>(this.apiUrl)//Dirección de la Json-DB
  }

  deleteTask(task: Task): Observable <Task> {
    const url=`${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task): Observable <Task> {
    const url=`${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, HttpOptions)
  }

  addTask(task:Task): Observable <Task> {
    return this.http.post<Task>(this.apiUrl, task, HttpOptions);
  }
}
