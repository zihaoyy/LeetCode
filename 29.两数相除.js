/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let result = parseInt(dividend / divisor)
  if (result >= Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return (Math.pow(2, 31) - 1)
  } else {
    return result
  }
};
// @lc code=end

