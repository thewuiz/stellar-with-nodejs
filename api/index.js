const StellarSdk = require('stellar-sdk')

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org')

module.exports = server
