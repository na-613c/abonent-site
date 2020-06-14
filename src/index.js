import './index.css';
import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './rerenderEntireTree';
import { myFirebase} from './firebase'
import  myAuthentication from './authentication';


myFirebase.readFromFirebase();
rerenderEntireTree(null, myFirebase, myAuthentication);

serviceWorker.unregister();



