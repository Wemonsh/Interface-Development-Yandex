/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var h, m, time = (hours*60) + minutes + interval;
    h = Math.floor(time / 60) % 24;
    m = time % 60;
    if (h === 0 || h < 9) {
        h = '0' + h;
    } 
    if (m === 0 || m < 9) {
        m = '0' + m;
    }
    return h + ':' + m;
};
