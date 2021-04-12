import { observableConstructorDemo, ofDemo1, ofDemo2, ofDemo3, fromDemo1, fromDemo2, fromDemo3, fromDemo4, fromDemo5, fromEventDemo1, fromEventDemo2, fromEventDemo3, fromEventPatternDemo1, fromEventPatternDemo2, fromFetchDemo, ajaxDemo1, ajaxDemo2, intervalDemo1, intervalDemo2, timerDemo1, timerDemo2, rangeDemo1, rangeDemo2, rangeDemo3, pairsDemo1, pairsDemo2, emptyDemo, neverDemo, throwErrorDemo, bindCallbackDemo1, bindCallbackDemo2, bindCallbackDemo3, bindCallbackDemo4, bindNodeCallbackDemo1, bindNodeCallbackDemo2, bindNodeCallbackDemo3, bindNodeCallbackDemo4, deferDemo, generateDemo1, generateDemo2, generateDemo3, generateDemo4 } from "./01-creation";
import { runner } from './02-practice/tasks';
console.log(`Hi, Rxjs`);


// ***********************************************
// *                           Observable Creation
// ***********************************************
observableConstructorDemo();

ofDemo1();
ofDemo2();
ofDemo3();

fromDemo1();
fromDemo2();
fromDemo3();
fromDemo4();
fromDemo5();

fromEventDemo1();
fromEventDemo2();
fromEventDemo3();

fromEventPatternDemo1();
fromEventPatternDemo2();

fromFetchDemo();

ajaxDemo1();
ajaxDemo2();

intervalDemo1();
intervalDemo2();

timerDemo1();
timerDemo2();

rangeDemo1();
rangeDemo2();
rangeDemo3();

pairsDemo1();
pairsDemo2();

emptyDemo();
neverDemo();
throwErrorDemo();

bindCallbackDemo1();
bindCallbackDemo2();
bindCallbackDemo3();
bindCallbackDemo4();

bindNodeCallbackDemo1();
bindNodeCallbackDemo2();
bindNodeCallbackDemo3();
bindNodeCallbackDemo4();


deferDemo();

generateDemo1();
generateDemo2();
generateDemo3();
generateDemo4();

runner();