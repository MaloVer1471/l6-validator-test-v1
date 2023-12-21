import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
