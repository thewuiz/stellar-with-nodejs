// Codigo para crear el scrow
const StellarSdk = require('stellar-sdk')
const server = require('../../api')
const { alice, escrow } = require('../../config')

async function createEscrow() {
  const aliceKeyPair = StellarSdk.Keypair.fromSecret(alice.secret)
  const aliceAccount = await server.loadAccount(alice.public)

  const escrowConfig = {
    destination: escrow.public,
    startingBalance: '1',
  }

  const transaction = new StellarSdk.TransactionBuilder(aliceAccount, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET,
  })
    .addOperation(StellarSdk.Operation.createAccount(escrowConfig))
    .setTimeout(200)
    .build()

  transaction.sign(aliceKeyPair)

  await server.submitTransaction(transaction)
  console.log('Cuenta escrow creada')
}

module.exports = createEscrow
