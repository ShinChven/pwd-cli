# pwd-cli

This is a cli wrapper for [generate-password](https://www.npmjs.com/package/generate-password) and [bcryptjs](https://www.npmjs.com/package/bcryptjs) to generate and hash password from command line.

Password generated will be like `GFZmGFWBVJ`.

## Install

[![npm version](http://img.shields.io/npm/v/pwd-cli.svg)](https://npmjs.org/package/pwd-cli)

```npm
npm install -g pwd-cli
```

## Generate a password

```bash
password # this will generate a password for you.
```

```bash
GFZmGFWBVJ # output password
```

## Generate a password with options

```bash
password --numbers -l 20 # The password contains numbers and length will be 20
```

```bash
options { numbers: true, length: 20 }   # output options
l9y6eds7u8Q8wDKbIVuZ                    # output password
```

## Options available

Please refer options to https://www.npmjs.com/package/generate-password#available-options

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
  {name: 'hash', type: Boolean},              // show hash result by bcrypt as well.
  {name: 'help', alias: 'h', type: Boolean},  // will show option definitions and not generate password.
]
```

## Hash your password

```bash
hash-pwd <YOUR_PASSWORD>
```

```bash
hash-pwd super_secret
$2a$10$jKwDbN2d4aLmC7tiaoqoXeTpExgCd2LBGnVc.oQTZhTG6I7sh4hYm
```

## Install from source

clone this repository and run `npm link`.

