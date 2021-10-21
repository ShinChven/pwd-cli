import bcrypt from 'bcryptjs';

async function hashPassword(password: string) {
    const saltRounds = 10;
    return await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })
}

export default hashPassword;

