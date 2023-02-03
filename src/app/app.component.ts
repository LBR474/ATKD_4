// angular core imports
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { loadmodelService } from './movement-services/loadmodel.service';
import { TimerVariablesService } from './movement-services/timer-variables.service';
import { TogglerService } from './movement-services/toggler.service';
import { ReturnToStartService } from './movement-services/return-to-start.service';
import { slideInAnimation } from './app.animation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
  
})
export class AppComponent implements OnInit {
  toolbar_title: string = 'Basic poomsae one';
  //camera_z_pos = 1.2;
  min_distance = 1.5;

  public href: string = '';
  constructor(
    public loadModel: loadmodelService,
    public timerVar: TimerVariablesService,
    public toggler: TogglerService,
    public rts: ReturnToStartService,
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('TKD basic poomsae game');
   
  }

  ngOnInit() {
    this.href = this.router.url ;
    console.log(this.router.url);
  }
}
