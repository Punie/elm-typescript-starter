import { interval } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { initializeElmApp, dispatch, sendTick } from './elm';

const node = document.querySelector('#elm-root');

const app = initializeElmApp(node, 'Hello world! o/');

app.ports.command.subscribe(dispatch);

interval(100)
  .pipe(
    map(n => n * 10),
    tap(console.log.bind(this)),
    filter(n => n % 100 === 0),
  )
  .subscribe(n => sendTick(app, n));
