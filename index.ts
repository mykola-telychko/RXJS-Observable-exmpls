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
const x = fooOld.call(); // same as foo()
console.log(x);
const y = fooOld.call(); // same as foo()
console.log(y);

// new and rxjs
const obsNew = new Observable((subscriber) => {
  console.log('HelloNew');
  subscriber.next(22);
});

obsNew.subscribe((res) => {
  console.log(res);
});
obsNew.subscribe((result) => {
  console.log(result);
});
// --- EXMPL - 2 - end
