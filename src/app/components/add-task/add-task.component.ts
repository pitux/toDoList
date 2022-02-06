import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task'; 

import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id: any;
  text: string = "";
  day: string ="";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService
  ) {
    this.subscription=this.uiService.onToogle().
                              subscribe(value=>this.showAddTask=value)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor añada una tarea!")
      return;
    }
  
  const {id, text, day, reminder} = this;
  const newTask = { id, text, day,reminder } 
   this.onAddTask.emit(newTask);  
  }

}