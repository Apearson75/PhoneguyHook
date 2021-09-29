const { Webhook } = require('discord-webhook-node')
const readline = require("readline-sync")

const hook = new Webhook(process.env.Webhook);

// Send Text
function send() {
var text = readline.question('Whatever you want?');
hook.send(text);
}

function sudo() {
var text = readline.question('What do you want to say?)> ')
var user = readline.question('Type the username> ')
hook.setUsername(user)
hook.send(text);
}

function start() {
var question = readline.question('Choose an option (send, sudo)>')
if(question=='send'){
  send()
} else if (question=='sudo'){
  sudo()
}
}

start()


webhook.send(text)

