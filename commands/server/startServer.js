const commando = require('discord.js-commando');
var nrc = require('node-run-cmd');

class StartServerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'startserver',
            group: 'server',
            memberName: 'startserver',
            description: 'Start Server'
        });
    }

    run(message) {
        message.channel.send("Server Started.");
        var commands = [
            'tes3mp-server.exe'
          ];
          var options = { cwd: 'C:/Games/Morrowind/' };
          nrc.run(commands, options);
    }
}
module.exports = StartServerCommand;