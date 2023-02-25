import './style.css';

import { Observable } from 'rxjs';

// https://rxjs.dev/guide/observable

// --- EXMPL - 1 - begin
const obs = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next('wait somthing');
  }, 1500);

  setTimeout(() => {
    subscriber.next(14);
    subscriber.complete();
  }, 2800);
});

// console.log('just before subscribe--START');

// obs.subscribe({
//   next(x) {
//     let val = typeof x === 'number' ? x + x : 'str: ' + x;
//     console.log('got ' + val);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('all process done');
//   },
// });

// console.log('just after subscribe--END');

// --- EXMPL - 1 - end

// --- EXMPL - 2 - begin

// old and simple
function fooOld() {
  console.log('HelloOld');
  return 11;
}
// const x = fooOld.call(); // same as foo()
// console.log(x);
// const y = fooOld.call(); // same as foo()
// console.log(y);

// new and rxjs
// const obsNew = new Observable((subscriber) => {
//   console.log('HelloNew');
//   subscriber.next(22);
// });

// obsNew.subscribe((res) => {
//   console.log(res);
// });
// obsNew.subscribe((result) => {
//   console.log(result);
// });
// --- EXMPL - 2 - end

// --- EXMPL - 3 - begin
// both functions and Observables are lazy computations
function foon() {
  return 'HelloFoon';
}
// console.log('before-SFN');
// console.log(foon.call());
// console.log('after-SFN');

// 2
const foonObs = new Observable((subscriber) => {
  console.log('foon Obs');
  subscriber.next('085');
});

// console.log('before-FN');
// foonObs.subscribe((x) => {
//   console.log(x);
// });
// console.log('after-FN');

// --- EXMPL - 3 - end

// --- EXMPL - 4 - begin
// Observables can "return" multiple values over time, something which functions cannot.

function simpleFoo() {
  console.log('Hello');
  return 42;
  return 100; // dead code. will never happen
}

const fooObs = new Observable((subscriber) => {
  // With synchronous output:
  console.log('first act SYNC values');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another

  // Happens asynchronously
  setTimeout(() => {
    subscriber.next('ASYNC 14');
    subscriber.complete();
  }, 3800);
});

// console.log('before - mltpl val');

// fooObs.subscribe((x) => {
//   // console.log(x + x);
//   console.log(x);
// });

// console.log('after - mltpl val ');

// Conclusion:
// fn.call() means "give me one value synchronously"
// observable.subscribe() means "give me any amount of values, either synchronously or asynchronously"

// --- EXMPL - 4 - end

// --- EXMPL - 5 - begin
// const observableHI = new Observable(function subscribe(subscriber) {
//   // const id = setInterval(() => {
//   //   subscriber.next('hi');
//   // }, 9000);
// });
// observable.subscribe((x) => console.log(x));

// A subscribe call is simply a way to start an "Observable execution" and deliver values or events to an Observer of that execution.

// --- EXMPL - 5 - end
