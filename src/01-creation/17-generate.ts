// generate<T, S>(
//    initialStateOrOptions: S | GenerateOptions<T, S>, 
//    condition?: ConditionFunc<S>, 
//    iterate?: IterateFunc<S>, 
//    resultSelectorOrObservable?: SchedulerLike | ResultFunc<S, T>, 
//    scheduler?: SchedulerLike
// ): Observable<T>

import { generate, asyncScheduler, scheduled } from 'rxjs';
import { addItem, run } from './../03-utils';

export function generateDemo1() {
  const initialState = 1;
  const condition = (value: number) => value <= 10;
  const iterate = (value: number) => value + 1;

  const source$ = generate(initialState, condition, iterate);
  
  // run(source$);
}

// Pass named functions to the generate function as arguments
export function generateDemo2() {
  const initialState = 1;
  const condition = (value: number) => value <= 10;
  const iterate = (value: number) => value + 1;
  const resultSelector = (value: number) => value * value;

  const source$ = generate(initialState, condition, iterate, resultSelector);
  
  // run(source$);
}

// Pass object to the generate function
export function generateDemo3() {
  const handleProcess = {
   initialState: 1,
   condition: (value: number) => value <= 10,
   iterate: (value: number) => value + 1,
   resultSelector: (value: number) => value * value
  };
  
  const source$ = generate(handleProcess);
  
  // run(source$);
  // setTimeout(addItem, 0, 'Some Data 1')
  // addItem('Some Data 2');
}

// Pass object to the generate function
export function generateDemo4() {
  const handleProcess = {
   initialState: 1,
   condition: (value: number) => value <= 10,
   iterate: (value: number) => value + 1,
   resultSelector: (value: number) => value * value,
   scheduler: asyncScheduler
  };
  
  const stream$ = generate(handleProcess);
  
  // run(stream$);
  // setTimeout(addItem, 0, 'Some Data 1')
  // addItem('Some Data 2');

  const handleProcessNew = {
    initialState: 1,
    condition: (value: number) => value <= 10,
    iterate: (value: number) => value + 1,
    resultSelector: (value: number) => value * value,
   };
  const streamNew$ = scheduled(generate(handleProcess), asyncScheduler);
  
  // run(streamNew$);
  // setTimeout(addItem, 0, 'Some Data 1')
  // addItem('Some Data 2');
}