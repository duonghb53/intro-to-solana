import { getDomainKeySync, NameRegistryState } from "@bonfida/spl-name-service";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const domainName = "toly"; // With or without the .sol at the end

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
// Step 1
const { pubkey } = getDomainKeySync(domainName);
console.log(`Pubkey: ${pubkey}`);
const accountInfo = await connection.getAccountInfo(pubkey);

if (!accountInfo) {
  throw new Error("Domain does not exist on this network.");
}

console.log(`Account info: ${accountInfo}`);

// Step 2
// The registry object contains all the info about the domain name
// The NFT owner is of type PublicKey | undefined
// const { registry, nftOwner } = await NameRegistryState.retrieve(
//   connection,
//   pubkey
// );

// if (!nftOwner) {
//   throw new Error("Provide a public key to check the balance of!");
// }

const publicKey = new PublicKey('FX1APjKbFu6M8GKb3dGXcZLXjxX4fGaYwvHqb5Vaee8q');

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(balanceInSOL);
