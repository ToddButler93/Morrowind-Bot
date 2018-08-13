const commando = require('discord.js-commando');
var nrc = require('node-run-cmd');

class RestartServerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'restartserver',
            group: 'server',
            memberName: 'restartserver',
            description: 'Restart Server'
        });
    }

    run(message) {
        message.channel.send("Server Shutting Down.");
        nrc.run('Taskkill /IM tes3mp-server.exe /F')
        setTimeout(function(){
            message.channel.send("Server Started.");
            var commands = [
            'tes3mp-server.exe'
             ];
            var options = { cwd: 'C:/Games/Morrowind/' };
            nrc.run(commands, options);
        }, 5000);
    }
}
module.exports = RestartServerCommand;