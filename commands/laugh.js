module.exports = {
    execute: function() {
        var laughs = [
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "", "", "", "", "", "",
            "lol", "lmao", "lmfao",
            "LOL", "LMAO", "LMFAO",
            "ROFL", "hahaha", "omg hahahaha!",
            "OMG HaHa!"
        ];

        var result = laughs[Math.floor((Math.random()*laughs.length))];
        if (result == ""){
            return null;
        }
        else {
            return result;
        }
    }
}