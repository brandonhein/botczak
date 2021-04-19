module.exports = {
    execute: function() {
        let jokes = [
            'Why was the math teacher late to work?... She took the rhombus.',
            'What kind of car runs on leaves?... An autumn-mobile!',
            'What did the duck say when she bought a lipstick?... Put it on my bill!',
            'What do you call a man with a rubber toe?... Roberto!',
            'Whens the best time to go to the dentist?... Tooth-hurtie!',
            'I once went to an emotional wedding... Even the cake was in tiers.',
            'What did Batman say to Robin before they got in the car?... "Robin, get in the car."',
            'What did the buffalo say when his son left?... Bison!',
            'Why were the dinosaurs important?... Because fossil fuels (just for you Rob :P)',
            'I\'m terrified of elevators so I\'m going to start taking steps to avoid them.',
            'I used to hate facial hair but then it grew on me.',
            'How does your feline shop?... By reading a CATalogue.',
            'How do you like eggs, Sunny-side up, scrambled, or an omelet?... I guess it doesn\'t matter. They\'re all eggcellent.',
            'What do you call an empty can of Cheese Whiz?... Cheese Was.'
        ];

        return jokes[Math.floor((Math.random()*jokes.length))];
    }
}