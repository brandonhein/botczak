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
            `Yo @${name}. Hows it goin?`,
            `@balczak! @${name} came to see us!!!`,
            `HIIIIIIIIIIIIIII @${name}!!!`,
            `Party don't start, until @${name} walks in!`
        ]

        return greetings[Math.floor((Math.random()*greetings.length))];
    },
    getForBalczak: function(){
        let greetings = [
            'Hello Daddy @balzcak, lets have a great stream today!',
            '@balczak are you ready for todays stream?!?!?!',
            'DAADDDDDDYYYYYYYYYYY!!!!',
            'Welcome Home @balczak',
            'Yo @balczak! SUP BRUH!',
            'Is @brandonhein in yet? Probably not, that slacker *quote* working *unquote*'
        ]

        return greetings[Math.floor((Math.random()*greetings.length))];
    }
}