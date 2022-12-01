import {
  trigger,
  state,
  stagger,
  animate,
  transition,
  style,
  group,
  query,
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', zIndex: 2 }),
      { optional: true }
    ),
    // group block executes in parallel
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const leftArmOpenClose = trigger('leftArmOpenClose', [
  // ...
  state(
    'open',
    style({
      height: 'fit-content',
      width: 'fit-content',
      right: '-200px'
      // transform: 'translateX(-200px)',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      // transform: 'translateX(600px)',
      right: '500px',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('1s')]),
]);


export const openClose = trigger('openClose', [
  // ...
  state(
    'open',
    style({
      height: 'fit-content',
      width: 'fit-content',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      transform: 'translateX(-100%)',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('1s')]),
]);
