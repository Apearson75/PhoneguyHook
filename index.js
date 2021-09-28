const { Webhook } = require('discord-webhook-node')
const readline = require("readline-sync")

const hook = new Webhook(process.env.Webhook);

// Send Text
function send() {
var text = readline.question('Whatever you want?');
hook.send(text);
}

function start() {
var question = readline.question('Choose an option (send)>')
if(question=='send'){
  send()
}
}

start()


webhook.send(text)

