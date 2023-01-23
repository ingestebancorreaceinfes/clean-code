interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;//Segregar método
}

interface RunningBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class HumminBird implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RunningBird {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}