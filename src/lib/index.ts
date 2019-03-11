import { initializeElmApp, dispatch, sendTick } from './elm';

const node = document.querySelector('#elm-root');

const app = initializeElmApp(node, 'Hello world! o/');

app.ports.command.subscribe(dispatch);

setTimeout(sendTick, 5000, app, 42);
