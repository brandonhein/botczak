module.exports = {
    route: function(commandName) {
        commandName = commandName.toLowerCase();

        switch (commandName){
            case "!dice":
                return require('./dice').execute();
            case "!pedal":
                return require('./pedal').execute();
            case "!joke":
            case "!lol":
                return require('./joke').execute();

            default:
                return require('./empty').execute();
        }
    }
}