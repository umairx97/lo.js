module.exports = {
  isBeforeDate,
  isAfterDate
}
/**
 * @param  {Date} date1 - Standard Javascript Date
 * @param  {Date} date2 - Standard Javascript Date
 */
function isBeforeDate (date1, date2) {
  return date1 < date2
}

/**
 * @param  {Date} date1 - Standard Javascript Date
 * @param  {Date} date2 - Standard Javascript Date
 */
function isAfterDate (date1, date2) {
  return !isBeforeDate(date1, date2)
}
