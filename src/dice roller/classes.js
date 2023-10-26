


export class Result {
  constructor(sum, totals, rolls, mods) {
    this.sum = 0;
    this.totals = [];
    this.rolls = {
      d4: [],
      d6: [],
      d8: [],
      d10: [],
      d12: [],
      d20: [],
      d100: [],
    };
    this.mods = [];
  }
}

export class Roll {
  constructor(operation, quantity, die, type) {
    this.operation = this.setOperation(operation);
    this.quantity = parseInt(quantity) ?? 0;
    this.die = parseInt(die) ?? 0;
    this.type = this.setType(type);
  }

  setOperation(operation) {
    if (operation === 'add' || operation === 'subtract') {
      return operation;
    }
    else if (operation === '+') {
      return 'add';
    }
    else if (operation === '-') {
      return 'subtract';
    }
    else {
      return 'add';
    }
  }

  setType(type) {
    if (type.length <= 1 && type[0] === '') {
      return [false]; // i am going to leave this as an array in case there would be any weird errors calling it later, ie type[0] === false? and so on 
    }
    return type;
  }
}                                         

export class RollResult extends Roll { // can this be just made its own separate class? is there any benefit in linking it to Roll?
  constructor(operation, die, type) {
    super(operation, 1, die, type);
    this.result = this.getResult();
    // delete this.setType;
  }

  getResult() {
    return this.operation === 'add' ? rollDie(this.die) : this.operation === 'subtract' ? -rollDie(this.die) : `ERROR`;
  }
}

export class Modifier {
  constructor(operation, value, type, source) {
    this.operation = this.setOperation(operation); // operation is either 'add' or 'subtract'
    this.value = parseInt(value) ?? 0;      // value is the number of the modifier, like 2 or 5 
    this.type = this.setType(type);     // type is either 'flat' or 'multiplier' // OR // type will be something like proficiency, fire, etc. // should this be a tags array?
    this.source = source ?? null; // source is the name of the modifier, like 'strength' or 'proficiency'
  }

  setOperation(operation) {
    if (operation === 'add' || operation === 'subtract') {
      return operation;
    }
    else if (operation === '+') {
      return 'add';
    }
    else if (operation === '-') {
      return 'subtract';
    }
    else {
      return 'add';
    }
  }

  setType(type) {
    if (type.length <= 1 && type[0] === '') {
      return [false]; // i am going to leave this as an array in case there would be any weird errors calling it later, ie type[0] === false? and so on 
    }
    return type;
  }
}