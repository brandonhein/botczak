const tmi = require('tmi.js');
const greetings = require('./greetings');
const commandRouter = require('./commands/command-router');
const screener = require('./bot-screener');
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
client.on('message', onMessage);
client.on('connected', onConnect);
client.connect();

function onConnect(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function onMessage(channel, context, msg, isSelf) {
  if (isSelf) { return; }

  if (!users.includes(context.username)) {
    users.push(context.username);

    if (context.username.toLowerCase() == 'balczak') {
      client.say(channel, greetings.getForBalczak());
    }
    else if (context.username.toLowerCase() == 'streamelements') {
      client.say(channel, greetings.getForStreamElements());
    }
    else if (screener.isBotMessage(msg)) {
      client.say(channel, `@${context.username} you a bot, bro?`);
    }
    else {
      client.say(channel, greetings.get(context.username));
    }
  }

  //console.log(JSON.stringify(channel));
  console.log(JSON.stringify(context));
  //console.log(JSON.stringify(isSelf));
  //console.log(JSON.stringify(msg));

  console.log(`${context.username}: ${msg}`);
  const commandName = msg.trim();

  var result = commandRouter.route(commandName);
  if (result)
    client.say(channel, result);
}