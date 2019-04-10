export class Task{
    constructor (procId) {
        console.log("Constructing Task");
        this.processId = procId;
    }
    showId() {
        console.log(this.processId);
    }
}
export class Project{
    constructor(name = "default"){
        console.log("Constructing Project: " + name);
        this.loc = "Sardius";
    }
    getLoc(){
        return this.loc;
    }
}
export class SoftwareProject extends Project{
    constructor(){
        super();
        this.loc += " Media";
    }
    saySomething(){
        console.log(this.loc);
    }
}
