import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttletime
// Example 1: Emit first value, ignore for 5s window
const srcInterval$ = interval(1000);
// emit the first value, then ignore for 5 seconds. repeat...
const example = srcInterval$.pipe(throttleTime(5000));
const subscribe = example.subscribe((val) => console.log(val));
// output: 0...6...12
