import {ModPool} from './modules.js';
import { ModuleContainer } from './modules.js';

class Statistic {
    constructor(majorMCsRequirement = 40, schoolTerm = "Year 1 Sem 1", modsTaken, modPool) {
        this.majorMCsRequirement = majorMCsRequirement;
        this.schoolTerm = schoolTerm;
        this.modsTaken = modsTaken;
        this.modPool = modPool;
    }

    getMCsLeft() {
        return this.majorMCsRequirement - this.modsTaken.length;
    }

    updateSchoolTerm(newShoolTerm) {
        this.schoolTerm = newSchoolTerm;
    }

    // update both score and database
    updateScore(module) {
        this.modPool.removeModule(module);
        if (module.isCS()) {
            this.modsTaken.push(module);
            return true;
        }
        return false;
    }

    getScore() {
        return this.modsTaken.length;
    }
}