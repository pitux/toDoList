import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';


import { faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons'; 



@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  
  @Input() task: Task=TASKS[0]; /* Con el decorador @Input podemos leer el array de tareas, en este caso la posición 0*/
  
  faTimes=faTimes;
  faCalendar=faCalendar

  constructor() { }

  ngOnInit(): void {
  }

}
