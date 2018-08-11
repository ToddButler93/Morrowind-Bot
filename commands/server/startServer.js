const commando = require('discord.js-commando');
var exec = require('child_process').execFile;

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
        exec('tes3mp-server.exe', {
            cwd: 'C:/Games/Morrowind/'
          }, function(error, stdout, stderr) {
            console.log(error);
            console.log(stdout);
            console.log(stderr); 
         });
    }
}
module.exports = StartServerCommand;