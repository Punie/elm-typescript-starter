import { initializeElmApp, dispatch } from './elm';

const node = document.querySelector('#elm-root');
const app = initializeElmApp(node, 'Hello world! o/');

dispatch(app);
