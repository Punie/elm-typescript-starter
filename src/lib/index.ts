import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { initializeElmApp, dispatch, sendTick } from './elm';

const node = document.querySelector('#elm-root');

const app = initializeElmApp(node, 'Hello world! o/');

app.ports.command.subscribe(dispatch);

const seconds = interval(1000);

seconds
  .pipe(
    map(n => n * 10),
    filter(n => n % 100 === 0)
  )
  .subscribe(n => sendTick(app, n));
