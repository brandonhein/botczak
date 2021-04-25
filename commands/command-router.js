module.exports = {
    route: function(commandName) {
        commandName = commandName.toLowerCase();

        switch (commandName){
            case "!command":
            case "!commands":
                return require('./commands').execute();
            case "!69":
            case "69":
                return require('./69').execute();
            case "!clip":
                return require('./clip').execute();
            case "!dice":
                return require('./dice').execute();
            case "!pedal":
                return require('./pedal').execute();
            case "!joke":
            case "!lol":
                return require('./joke').execute();

            case "lol":
            case "lmao":
            case "lmfao":
            case "rofl":
            case "hahahaha":
            case "hahaha":
            case "haha":
            case "hah":
                return require('./laugh').execute();

            case "bye nicki":
                return require('./bye-nicki').execute();

            default:
                return require('./empty').execute();
        }
    }
}