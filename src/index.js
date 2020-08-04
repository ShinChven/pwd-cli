#!/usr/bin/env node
const generator = require('generate-password');
const commandLineArgs = require('command-line-args');
const hashPassword = require('./hash-password');

/**
 * please refer options to https://www.npmjs.com/package/generate-password#available-options
 * @type {({name: string, alias: string, type: NumberConstructor}|{name: string, alias: string, type: BooleanConstructor}|{name: string, alias: string, type: BooleanConstructor}|{name: string, type: BooleanConstructor}|{name: string, type: BooleanConstructor})[]}
 */
const optionDefinitions = [
  {name: 'length', alias: 'l', type: Number},
  {name: 'numbers', alias: 'n', type: Boolean},
  {name: 'symbols', alias: 's', type: Boolean},
  {name: 'lowercase', type: Boolean},
  {name: 'uppercase', type: Boolean},
  {name: 'excludeSimilarCharacters', type: Boolean},
  {name: 'exclude', type: String},
  {name: 'strict', type: Boolean},
  {name: 'hash', type: Boolean}, // show hash result by bcrypt as well.
  {name: 'help', alias: 'h', type: Boolean}, // will show option definitions and not generate password.
]
const options = commandLineArgs(optionDefinitions);

if (Object.keys(options).length > 0) {
  console.log('options', options);
}

const {help = false, hash = false} = options;

if (help) {
  console.log('options available', optionDefinitions);
} else {
  const password = generator.generate(options);
  console.log(password);
  if (hash) {
    hashPassword(password).then(hash => console.log(hash));
  }
}



