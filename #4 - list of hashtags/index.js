/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var spl = tweet.split(' ');

    var result = spl.filter(
        function(item) {
            if(item[0] == '#') {
                return true;
            }
        }
    ).map(
        function (item) {
            return item = item.slice(1,item.length);
        }
    );
                       
    return result;
};
