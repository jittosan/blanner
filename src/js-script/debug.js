import {Module} from './module.js';
import {ModPool} from './modules.js';
import { ModuleContainer } from './modules.js';
 
var module = new Module("ESP1111");

console.log(module.getModuleCode());

var modPool = new ModPool([new Module("ESP1111"), new Module("ESP2111"), new Module("ESP2110")]);
modPool.addModule(new Module("ESP3111"));
console.log(modPool.getModuleList());