#!/usr/bin/env node
const generator = require('generate-password');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {name: 'length', alias: 'l', type: Number},
  {name: 'numbers', alias: 'n', type: Boolean},
  {name: 'symbols', alias: 's', type: Boolean},
  {name: 'lowercase', type: Boolean},
  {name: 'uppercase', type: Boolean},
  {name: 'excludeSimilarCharacters', type: Boolean},
  {name: 'exclude', type: String},
  {name: 'strict', type: Boolean},
]
const options = commandLineArgs(optionDefinitions);

if (Object.keys(options).length > 0) {
  console.log('options', options);
}

const password = generator.generate({
  length: 16,
  numbers: true,
  // symbols: true,
  uppercase: true,
  lowercase: true,
  // excludeSimilarCharacters:true,
  ...options,
});

// 'uEyMTw32v9'
console.log(password);
