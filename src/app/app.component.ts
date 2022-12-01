// angular core imports
import { Component, OnInit, Input } from '@angular/core';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

import { TogglerService } from './movement-services/toggler.service';
import { ReturnToStartService } from './movement-services/return-to-start.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Basic poomsae one';
  
  

  constructor(
    public toggler: TogglerService,
    public rts: ReturnToStartService,
    ) {}
    

  ngOnInit(): void {}
}
