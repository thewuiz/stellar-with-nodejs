const dovenv = require('dotenv')
dovenv.config()

const alice = {
  public: process.env.ALICE_PUBLIC,
  secret: process.env.ALICE_SECRET,
}

const bob = {
  public: process.env.BOB_PUBLIC,
  secret: process.env.BOB_SECRET,
}

const escrow = {
  public: process.env.ESCROW_PUBLIC,
  secret: process.env.ESCROW_SECRET,
}

module.exports = {
  alice,
  bob,
  escrow,
}
