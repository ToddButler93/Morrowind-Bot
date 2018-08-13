const commando = require('discord.js-commando');
var nrc = require('node-run-cmd');

class StopServerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stopserver',
            group: 'server',
            memberName: 'stopserver',
            description: 'Stop Server'
        });
    }

    run(message) {
        nrc.run('Taskkill /IM tes3mp-server.exe /F')
        message.channel.send("Server Stopped.");
    }
}
module.exports = StopServerCommand;