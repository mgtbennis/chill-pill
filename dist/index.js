"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const consola_1 = __importDefault(require("consola"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
const token = process.env["TOKEN"];
client.on("ready", () => {
    consola_1.default.success("Client is ready!");
});
client.on("messageCreate", (message) => {
    if (message.content === "ping") {
        message.reply({ content: "pong!!!" });
    }
    if (message.content === "pong") {
        message.reply({ content: "f u doner!" });
    }
});
client.login(token);
//# sourceMappingURL=index.js.map