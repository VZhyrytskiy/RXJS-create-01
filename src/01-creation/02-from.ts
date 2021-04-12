// from<T>(input: any, scheduler?: SchedulerLike): Observable<T>

import { from, asyncScheduler, scheduled } from 'rxjs';
import { addItem, run } from './../03-utils';
import { take } from 'rxjs/operators';

// From Array
export function fromDemo1() {
  const array: Array<number> = [1, 2, 3, 4, 5, 6];
  const stream$ = from(array);

  // run(stream$);
  // addItem('Next line of code');
}

// From Promise
export function fromDemo2() {
  const promise = Promise.resolve(5);
  const stream$ = from(promise);

  // run(stream$);
}

// From itarable object - string
export function fromDemo3() {
  const stream$ = from('Hello World!');

  // run(stream$);
}

// From infinite iterable object - generator
export function fromDemo4() {
  function* generateDoubles(seed: number) {
    let i = seed;
    while (true) {
      yield i;
      i = 2 * i; // double it
    }
  }

  const iterator = generateDoubles(3);

  const stream$ = from(iterator).pipe(take(5));

  //  run(stream$);
}

// From Map
export function fromDemo5() {
  const map = new Map();
  map.set(1, 'Hi');
  map.set(2, 'Bye');

  const streamOld$ = from(map, asyncScheduler);
  const streamNew$ = scheduled(from(map), asyncScheduler); 

  // run(streamOld$);
  // run(streamNew$);
  // addItem('Next line of code');
}
