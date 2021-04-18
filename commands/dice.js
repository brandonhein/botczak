module.exports = {
    execute: function() {
        const sides = 6;
        let result = Math.floor(Math.random() * sides) + 1;

        return `You rolled a ${result}`;
    }
}