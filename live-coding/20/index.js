class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(this);
    console.log(`${this.name} is runing`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    // this.name = name;
    this.swimStyle = swimStyle;
  }

  swim() {
    console.log(`${name} is swimming ${this.swimStyle}`);
  }
}

const sprinter = new Sportsman('Mike');
sprinter.run();

const swimer = new Swimmer('Jeison', 'Grablya');
console.log(swimer);
swimer.run();
swimer.swim();
sprinter.swim();
