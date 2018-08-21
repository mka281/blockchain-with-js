const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
bitcoin.createNewBlock(12312, "SDFSDF45TDFGJ3", "123ASDASD121231");
bitcoin.createNewBlock(435, "IOUKJNM536MN", "5TRDGFBV");
bitcoin.createNewBlock(6212, "BVNDFGBHJ5342", "788GFBCV3");

console.log(bitcoin);
