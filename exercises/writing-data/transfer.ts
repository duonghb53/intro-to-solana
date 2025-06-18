import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection(process.env.RPC_URL!, "confirmed");

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 10_000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}`);

// Get transaction details
const transactionDetails = await connection.getParsedTransaction(signature);
console.log(JSON.stringify(transactionDetails, null, 2));

// Log fee
const fee = transactionDetails?.meta?.fee;
console.log(`Fee: ${fee}`);

// Get price of SOL
const response = await fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
);
const price = (await response.json())["solana"]["usd"];
console.log(`SOL Price (USD): ${price}`);

// Fee in USD
const feeInUSD = (fee ? fee * price : 0) / LAMPORTS_PER_SOL;
console.log(`Fee in USD: ${feeInUSD}`);
