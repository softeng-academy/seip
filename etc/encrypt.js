
const [ originaltext, passphrase ] = process.argv.slice(2)

const CryptoJS = require("crypto-js")
const ciphertext = CryptoJS.AES.encrypt(originaltext, passphrase).toString()
const verifytext = CryptoJS.AES.decrypt(ciphertext, passphrase).toString(CryptoJS.enc.Utf8)
if (verifytext !== originaltext)
    throw new Error("failed to encrypt")
console.log(originaltext)
console.log(ciphertext)

