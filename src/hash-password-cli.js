#!/usr/bin/env node

const hashPassword = require('./hash-password');
const password = process.argv[2];
hashPassword(password).then(hash=>console.log(hash));
