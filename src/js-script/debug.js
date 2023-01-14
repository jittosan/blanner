import {Module} from './module.js';
import {ModPool} from './modules.js';
import { ModuleContainer } from './modules.js';
 
var modPool = new ModPool("tester.csv");
console.log(modPool.modules);