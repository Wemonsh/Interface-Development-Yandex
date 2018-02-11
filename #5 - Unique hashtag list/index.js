/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
var words = [];

// приводим хештеги к нижнему регистру
words = hashtags.map(
    function (str){
        return str.toLowerCase();
    }
);

// фунция для получения уникальных хештегов
function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

words = unique(words);

return words.join(', ');
};
