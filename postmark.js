import * as postmark from "postmark";

const serverToken = process.env.POSTMARK_TOKEN;
const client = new postmark.ServerClient(serverToken);

export { client };
