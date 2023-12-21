export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  allIntegers() {
    const validator = (value) => value.every((item) => {
      if (typeof item !== 'number') return false;
      if (Math.trunc(item) !== item) return false;
      return true;
    });
    return new ArraySchema([...this.validators, validator]);
  }

  custom(condition) {
    const validator = (value) => value.every(condition);
    return new ArraySchema([...this.validators, validator]);
  }
}
