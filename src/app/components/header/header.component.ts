import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Lista de tareas';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router:Router
  ) {
    this.subscription = this.uiService.onToogle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

    toogleAddTask() {
      this.uiService.toogleAddTask();
  //  alert('Add Task header component');
  }

  hasRoute(route:string){
    return this.router.url === route
    //Nos sirve para conocer  
  }

}
