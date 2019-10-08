import { Action, App, Elm, Flags, TickMessage } from '../elm/Main';
import { assertNever } from './utils';

export function initializeElmApp(node: Element | null, flags: Flags): App {
  return Elm.Main.init({ node, flags });
}

function log(value: string): void {
  console.log(value);
}

function store(value: number): void {
  console.log(`Storing value: ${value}`);
}

export function dispatch(action: Action): void {
  switch (action.kind) {
    case 'log':
      return log(action.value);
    case 'store':
      return store(action.value);
    default:
      return assertNever(action);
  }
}

export function sendTick(app: App, tick: number): void {
  const tickMsg: TickMessage = {
    kind: 'tick',
    value: tick,
  };

  app.ports.notification.send(tickMsg);
}
