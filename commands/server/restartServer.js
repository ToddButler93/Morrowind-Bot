const commando = require('discord.js-commando');

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
        exec('tasklist', (err, out, code) => { //tasklist is windows, but run command to get proccesses
            const id = processIdFromTaskList("tes3mp-server.exe", out); //get process id from name and parse from output of executed command
            process.kill(id, "SIGKILL"); //rekt
        });
        message.channel.send("Server Shutting Down.");
        setTimeout(function(){
            //do what you need here
        }, 5000);
    }
}
module.exports = RestartServerCommand;