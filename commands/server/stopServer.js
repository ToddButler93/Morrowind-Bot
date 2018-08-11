const commando = require('discord.js-commando');
var exec = require('child_process').exec;

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
        exec('tasklist', (err, out, code) => { //tasklist is windows, but run command to get proccesses
            const id = processIdFromTaskList("cmd.exe", out); //get process id from name and parse from output of executed command
            process.kill(id, "SIGKILL"); //rekt
        });
        message.channel.send("Server Stopped.");
    }
}
module.exports = StopServerCommand;