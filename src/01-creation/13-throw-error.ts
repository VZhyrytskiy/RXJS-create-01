// throwError(
//   errorFactory: any
// ): Observable<never>

import { throwError } from 'rxjs';
import { addItem, run } from './../03-utils';

export function throwErrorDemo() {
  const stream$ = throwError(() => new Error(`This is an error!`));

  // run(stream$);
}
