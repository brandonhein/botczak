module.exports = {
    isBotMessage: function(msg) {
        if (msg.toLowerCase().includes('http:') || msg.toLowerCase().includes('https:')) {
            return true;
        }
        return false;
    }
}