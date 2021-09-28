const fetch = require("isomorphic-fetch");

var hook = prompt("Enter Discord Webhook");
var message = prompt("What do you want to say?");


fetch(hook,
      {"method": "POST", "headers": {"content-type": "application/json"},
       "body": JSON.stringify(message)});

