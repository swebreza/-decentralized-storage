const { create } = require('ipfs-http-client')

const auth =
  'Basic ' +
  Buffer.from(
    process.env.INFURA_ID + ':' + process.env.INFURA_SECRET_KEY
  ).toString('base64')

exports.ipfsCobtroller = async (req, res) => {
  const ipfs = await create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth, // infura auth credentails
    },
  })
  return ipfs
}
