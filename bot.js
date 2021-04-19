const tmi = require('tmi.js');
const greetings = require('./greetings');
const commandRouter = require('./commands/command-router');
const users = [];

const opts = {
  identity: {
    username: 'botczak',
    password: ''
  },
  channels: [
    //'brandonhein'
    'balczak'
  ]
};

const client = new tmi.client(opts);
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function onMessageHandler (target, context, msg, self) {
  if (self) { return; }

  if (!users.includes(context.username)) {
    users.push(context.username);

    if (context.username.toLowerCase() == 'balzcak') {
      client.say(target, greetings.getForBalczak());
    }
    else if (context.username.toLowerCase() == 'streamelements') {
      client.say(target, "@StreamElements? never heard of her");
    }
    else {
      client.say(target, greetings.get(context.username));
    }
  }

  //console.log(JSON.stringify(target));
  //console.log(JSON.stringify(context));
  //console.log(JSON.stringify(self));
  //console.log(JSON.stringify(msg));

  console.log(`${context.username}: ${msg}`);
  const commandName = msg.trim();

  var result = commandRouter.route(commandName);
  if (result)
    client.say(target, result);
}