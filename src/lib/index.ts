import { initializeElmApp, dispatch, tick } from './elm';

const node = document.querySelector('#elm-root');

const app = initializeElmApp(node, 'Hello world! o/');

app.ports.command.subscribe(dispatch);

let n = 0;
const send = () => {
  n += 1;
  app.ports.notification.send(tick(n));
};
setInterval(send, 1000);
