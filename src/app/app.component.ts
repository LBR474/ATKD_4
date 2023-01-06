// angular core imports
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { TogglerService } from './movement-services/toggler.service';
import { ReturnToStartService } from './movement-services/return-to-start.service';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  toolbar_title: string = 'Basic poomsae one';

  constructor(
    public toggler: TogglerService,
    public rts: ReturnToStartService,
    private titleService: Title, 
  ) {

    this.titleService.setTitle('TKD basic poomsae game');

  }

  ngOnInit(): void {}
  
}
