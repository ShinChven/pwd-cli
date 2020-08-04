const bcrypt = require('bcrypt');
async function hashPassword(password) {
  const saltRounds = 10;
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })
}

module.exports = hashPassword;

