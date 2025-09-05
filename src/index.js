import './style.css';

import { loadController } from './scripts/loadFunc.js';
import { consoleController } from './scripts/consoleController.js';

consoleController.loadFromDisk();
loadController.loadLists();
loadController.loadList(0);
