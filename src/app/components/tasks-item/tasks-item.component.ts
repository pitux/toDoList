import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';

//icons
import { faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  
 // @Input() task: Task=TASKS[0]; /* Con el decorador @Input podemos leer el array de tareas*/
 
  @Input() task: Task=TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToogleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes=faTimes;
  faCalendar=faCalendar

  constructor() { }

  ngOnInit(): void {
  }
 
  onDelete(task:Task){
   this.onDeleteTask.emit(task);
  }
  onToogle(task:Task){
    this.onToogleReminder.emit(task)
  }
}
