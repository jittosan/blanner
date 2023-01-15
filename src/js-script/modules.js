import fs from "fs";
import csv from 'csvtojson';
import {Module} from './module.js';

class ModuleContainer {
    constructor(modules) {
        if (modules == undefined) {
            this.modules = [];
        } else {
            this.modules = modules;
        }
        
    }

    //check if the module is in the list
    checkModule(module) {
        return this.modules.includes(module); 
    }

    getModuleList() {
        return this.modules;
    }

    addModule(module) {
        if (!this.checkModule(module)) {
            this.modules.push(module);
            return true;
        }
        return false;
    }

    removeModule(module) {
        if (this.checkModule(module)) {
            this.modules.splice(modules.indexOf(module));
            return true;
        }       
        return false;
    }

    getModule(moduleCode) {
        for (i = 0; i < this.modules.length; i++) {
            if (modules[i].getModuleCode() == moduleCode) {
                return this.modules[i];
            }
        } 
        return null;
    }
}

//database
class ModPool extends ModuleContainer {
    constructor() {
        super();
    }

    static readCSVfile() {
        let obj = fs.readFileSync('./tester.json');
        let list = JSON.parse(obj);
        let modules = [];
        for (let i = 0; i < list.length; i++) {
            modules.push(new Module(list[i].moduleCode, list[i].probability))
        }
        console.log(modules);
        return modules;
    }
}

//Modules taken (in the basket)
class ModsTaken extends ModuleContainer {
    constructor(modules) {
        super(modules);
    }
}

export {ModPool}
export {ModsTaken}
export{ModuleContainer}