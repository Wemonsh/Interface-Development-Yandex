/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if (!isNaN(Number(hours)) && !isNaN(Number(minutes))) {
        if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59))  {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
