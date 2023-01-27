import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerVariablesService {

  up_arms_timer = 0.6
  down_arms_timer = 0.15

  full_turn_duration = this.up_arms_timer + this.down_arms_timer

  count_incrementer = 8

  constructor() { }
}
