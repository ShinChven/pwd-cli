#!/usr/bin/env node

import hashPassword from './hash-password';

const password = process.argv[2];
hashPassword(password).then(hash=>console.log(hash));
