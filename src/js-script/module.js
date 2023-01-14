class Module {
    constructor(moduleCode) {
        this.moduleCode = moduleCode;
        this.probability = this.probability;
    }

    getProbability() {
        return this.probability;
    }

    isCS() {
        return this.moduleCode.slice(0,2) == "CS";
    }

    getModuleCode() {
        return this.moduleCode;
    }

    setModuleCode(newModuleCode) {
        this.moduleCode = newModuleCode;
        return true;
    }
}