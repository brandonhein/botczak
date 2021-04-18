module.exports = {
    get: function(name){
        let greetings = [
            `Welcome to the stream, @${name}`,
            `@${name}! Wazzup!?!?!`,
            `Thanks for coming @${name}`,
            `Look out! @${name} is here!!`,
            `Thank goodness! @${name} in the house!`,
            `@${name}, welcome!`,
            `How's your day? @${name}`,
            `Yo @${name}. Hows it goin?`
        ]

        return greetings[Math.floor((Math.random()*greetings.length))];
    }
}