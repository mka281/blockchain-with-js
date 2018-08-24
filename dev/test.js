const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const previousBlockHash = "ASD67S8F768GFSD68";
const currentBlockData = [
  {
    amount: "234",
    sender: "DFSGSDFGDF",
    recipient: "DFGSDG5467"
  },
  {
    amount: "43",
    sender: "SDFASD6FS879",
    recipient: "DSFGSDFG4356346"
  },
  {
    amount: "777",
    sender: "SDFGSDF8979SDFG",
    recipient: "FSDGSDFG879879DFSG"
  }
];
const nonce = 123;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
