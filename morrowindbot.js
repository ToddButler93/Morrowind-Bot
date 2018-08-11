const commando = require('discord.js-commando')
const bot = new commando.Client();
require('dotenv').load();

bot.registry.registerGroup('server', 'Server');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
    
})
bot.login(process.env.TOKEN);