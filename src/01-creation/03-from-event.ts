// fromEvent(
//   target: FromEventTarget<T>, 
//   eventName: string, 
//   options?: EventListenerOptions | ((...args: any[]) => T), 
//   resultSelector?: (...args: any[]) =>  T  // DEPRECATED
// ): Observable<T>

import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { addItem, run } from './../03-utils';

// fromEvent
export function fromEventDemo1() {
  const target = document.body;
  const eventName = 'mousemove';
  const stream$ = fromEvent(target, eventName);

  // run(stream$, {outputMethod: 'console'});
}

// fromEvent + resultSelector
export function fromEventDemo2() {
  const target = document;
  const eventName = 'click';
  const resultSelector = (event: any) => event.clientX; // transform original event object to value of clientX property
  const stream$ = fromEvent(target, eventName).pipe(map(resultSelector));
  
  // run(stream$);
}

// fromEvent + options object
export function fromEventDemo3() {
  const target1 = document;
  const target2 = document.body;
  const eventName = 'click';
  
  const resultSelector1 = (event: any) => event.clientX; // X

  const stream$1 =fromEvent(target1, eventName, { capture: true }).pipe(map(resultSelector1)); 
  const stream$2 = fromEvent(target2, eventName).pipe(pluck('clienY'));

  // run(stream$1);
  // run(stream$2);
}
