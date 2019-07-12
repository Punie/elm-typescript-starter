import { Action, App, Elm, Flags, TickMessage } from '../elm/Main';
import { assertNever } from './utils';

export function initializeElmApp(node: Element | null, flags: Flags): App {
  return Elm.Main.init({ node, flags });
}

export function dispatch(app: App) {
  return function (action: Action) {
    switch (action.kind) {
      case 'load':
        return load(app);
      case 'log':
        return log(action.value);
      case 'store':
        return store(action.value);
      default:
        return assertNever(action);
    }
  };
}

export function sendTick(app: App, tick: number): void {
  const tickMsg: TickMessage = {
    kind: 'tick',
    value: tick,
  };

  app.ports.notification.send(tickMsg);
}

async function load(app: App) {
  const { interval, filter, map, tap } = await import('./rxjs');

  interval(100)
    .pipe(
      map(n => n * 10),
      tap(n => console.log(n)),
      filter(n => n % 100 === 0),
    )
    .subscribe(n => sendTick(app, n));
}

function log(value: string) {
  console.log(value);
}

function store(value: number) {
  console.log(`Storing value: ${value}`);
}
