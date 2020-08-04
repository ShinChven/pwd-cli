# password-generator-cli

This is a cli wrapper for [generate-password](https://www.npmjs.com/package/generate-password) to generate password from command line.

Password generated will be like `GFZmGFWBVJ`.

## usage

```bash
password # this will generate a password for you.
```

## use with options

```bash
password --numbers -l 20 # The password contains numbers and length will be 20
```

## options available

```js options
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
```

## install from source

clone this repository and run `npm link`.

