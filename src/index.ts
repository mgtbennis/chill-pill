import { Client, Intents } from "discord.js";
import consola from "consola";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const token = process.env["TOKEN"];

client.on("ready", () => {
  consola.success("Client is ready!");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply({ content: "pong!!!" });
  }
  if (message.content === "pong") {
    message.reply({ content: "Doner is the greatest AMEN" });
  }
  if (message.content === "thimly") {
    message.reply({ content: "flash!" });
  }
  if (message.content === "hamada?") {
    message.reply({ content: "lwiki" });
  }
  
});

client.login(token);
