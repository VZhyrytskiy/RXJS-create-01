// pairs<T>(
//   obj: Object, 
//   scheduler?: ShedulerLike
// ): Observable<[string, T]>

import { pairs, asyncScheduler } from 'rxjs';
import { addItem, run } from './../03-utils';

export function pairsDemo1() {
  const obj = {
    id: 1,
    name: 'Anna',
    age: 16
  };

  const stream$ = pairs(obj);

  // run(stream$);
  // addItem('Next Line of Code');
  // setTimeout(addItem, 0, 'Third Line of Code');
}

export function pairsDemo2() {
  const obj = {
    id: 1,
    name: 'Anna',
    age: 16
  };

  Object.defineProperty(obj, 'city', {
    value: 'Kyiv',
    // enumerable: true
  });

  const scheduler = asyncScheduler;

  const stream$ = pairs(obj, scheduler);

  // run(stream$);
  // addItem('Next Line of Code');
  // setTimeout(addItem, 0, 'Third Line of Code');
}
