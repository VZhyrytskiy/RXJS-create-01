// bindCallback<T>(
//   callbackFunc: Function, 
//   resultSelector?: Function | ShedulerLike, // DEPRECATED
//   sheduler?: ShedulerLike
// ): (...args: any[]) => Observable<T>

import { bindCallback, asyncScheduler } from 'rxjs';
import { map } from 'rxjs/operators';
import { addItem, run } from './../03-utils';

export function bindCallbackDemo1() {
  function doSomething(data: string, callback: (arg: Array<string>) => number) {
   const words = data.split(' ');

   callback(words);
  }

  const boundFunc = bindCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}

export function bindCallbackDemo2() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => number) {
    const words = data.split(' ');
    
    callback(words, words.length);
  }
  
  const boundFunc = bindCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}

export function bindCallbackDemo3() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => number) {
   const words = data.split(' ');

   callback(words, words.length);
  }
  
  const boundFunc = bindCallback(doSomething, asyncScheduler);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
}


export function bindCallbackDemo4() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => number) {
   const words = data.split(' ');

   callback(words, words.length);
  }
  
  const boundFunc = bindCallback(doSomething);
  
  const source$ = boundFunc('Some Data').pipe(map((value: any) => value[0]));
  // run(source$);
}

