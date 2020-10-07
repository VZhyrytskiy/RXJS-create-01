// fromEventPattern(
//   addHandler: (handler: NodeEventHandler) => any,
//   removeHandler?: (handler: NodeEventHandler, signal?: any) => void, 
//   resultSelector?: (...args: any[]) => T // DEPRECATED
// ): Observable<T | T[]>

import { fromEventPattern } from 'rxjs';
import { addItem, run } from './../03-utils';
import { map, pluck } from 'rxjs/operators';

export function fromEventPatternDemo1() {
  function addHandler(handler) {
    document.addEventListener('click', handler);
  }

  function removeHandler(handler) {
    document.removeEventListener('click', handler);
  }

  const resultSelector = (event: any) => event.clientX; // optional
  const stream$ = fromEventPattern(addHandler, removeHandler).pipe(map(resultSelector));

  // run(stream$);
}

export function fromEventPatternDemo2() {
  const myWorker = new Worker('04-from-event-pattern-worker.js');

  const stream$ = fromEventPattern(
    handler => { myWorker.onmessage = handler },
    handler => { myWorker.onmessage = undefined }
  ).pipe(pluck('data'));

  // run(stream$);

  myWorker.postMessage(1);
}



