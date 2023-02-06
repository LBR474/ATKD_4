import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerVariablesService {
  up_arms_timer = 0.45;
  down_arms_timer = 0.15;
  camera_z_pos = 1.2;
  min_distance = 1.4;

  full_turn_duration = this.up_arms_timer + this.down_arms_timer;

  count_incrementer = 8;

  constructor() {}
}
