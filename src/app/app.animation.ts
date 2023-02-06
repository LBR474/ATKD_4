import {
  trigger,
  state,
  // stagger,
  animate,
  transition,
  style,
  group,
  query,
} from '@angular/animations';

export const attchoonOpenClose = trigger('attchoonOpenClose', [
  // ...
  state(
    'open',
    style({
      height: 'fit-content',
      width: 'fit-content',
      left: '50px',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      left: '-400px',
    })
  ),
  transition('* <=> *', [animate('3.0s ease-out')]),
]);

export const changeOverTitle = trigger('changeOverTitle', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      transform: 'rotateY(0deg)',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,
      transform: 'rotateY(-180deg)',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
  // transition('closed => open', [animate('1.5s')]),
]);

export const changeOverFinal = trigger('changeOverFinal', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      left: '100px',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,

      left: '-500px',
    })
  ),
  transition('* <=> *', [animate('5.0s ease-out')]),
  // transition('closed => open', [animate('1.5s')]),
]);

export const changeOverKiop = trigger('changeOverKiop', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      // left: '60%',
      // top: '15%',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,

      //left: '-500px',
    })
  ),
  transition('* <=> *', [animate('0.01s')]),
  // transition('closed => open', [animate('1.5s')]),
]);

export const changeOverBP4KiopLeft = trigger('changeOverBP4KiopLeft', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      left: '37%',
      top: '15%',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,
      // left: '60%',
      // top: '25%',
    })
  ),
  transition('* <=> *', [animate('0.01s')]),
  // transition('closed => open', [animate('1.5s')]),
]);

export const changeOverBP4KiopRight = trigger('changeOverBP4KiopRight', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
      left: '60%',
      top: '5%',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,

      //left: '-500px',
    })
  ),
  transition('* <=> *', [animate('0.01s')]),
  // transition('closed => open', [animate('1.5s')]),
]);

export const correctOpenClose = trigger('correctOpenClose', [
  // ...
  state(
    'open',
    style({
      height: 'fit-content',
      width: 'fit-content',
      top: '-30%',

      // transform: 'translateX(-200px)',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      // transform: 'translateX(600px)',
      top: '10%',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
]);

export const finalOpenClose = trigger('finalOpenClose', [
  // ...
  state(
    'closed',
    style({
      // height: 'fit-content',
      // width: 'fit-content',
      top: '20%',
    })
  ),
  state(
    'open',
    style({
      // width: 'fit-content',
      // height: 'fit-content',

      top: '-30%',
    })
  ),
  transition('* => *', [animate('1s')]),
  //transition('closed => open', [animate('1s')]),
]);

export const instructionOpenClose = trigger('instructionOpenClose', [
  // ...
  state(
    'closed',
    style({
      // height: 'fit-content',
      // width: 'fit-content',
      top: '-30%',
    })
  ),
  state(
    'open',
    style({
      // width: 'fit-content',
      // height: 'fit-content',
      left: '250px',
      top: '15%',
    })
  ),
  transition('* => *', [animate('1s')]),
  //transition('closed => open', [animate('1s')]),
]);

export const leftArmOpenClose = trigger('leftArmOpenClose', [
  // ...
  state(
    'open',
    style({
      width: 'fit-content',
      height: 'fit-content',
      top: '-350px',
      right: '0px',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      top: '50px',
      right: '0px',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
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
  transition('* <=> *', [animate('1.0s')]),
]);

export const rotator = trigger('rotator', [
  state('open', style({ transform: 'rotateY(0deg)' })),
  state('closed', style({ transform: 'rotateY(180deg)' })),
  transition('* <=> *', [animate('1.0s')]),
]);

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
          animate('1.0s ease-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('1.0s ease-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const stanceOpenClose = trigger('stanceOpenClose', [
  // ...
  state(
    'open',
    style({
      height: 'fit-content',
      width: 'fit-content',
      left: '250px',
    })
  ),
  state(
    'closed',
    style({
      width: 'fit-content',
      height: 'fit-content',
      transform: 'translateX(-300px)',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('1s')]),
]);

export const visibleInvisible = trigger('visibleInvisible', [
  // ...
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,
      transform: 'rotateY(-180deg)',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
  // transition('closed => open', [animate('1.5s')]),
]);
