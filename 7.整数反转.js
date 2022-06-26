/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = String(x < 0 ? -x : x).split('')
  arr.reverse()
  let str = arr.join('')
  if (str < -2147483648 || str > 2147483647) return 0
  return x < 0 ? -str : str
};
// @lc code=end

