module.exports = {
    execute: function() {
        let byes = [
            "bye @Ms_NickiF"
        ];

        var result = byes[Math.floor((Math.random()*byes.length))];
        return result;
    }
}