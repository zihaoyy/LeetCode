/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let nineNum = 0;
  const maps = digits.reverse().entries();
  for (const [i, e] of maps) {
    if (e !== 9) break;
    ++nineNum && (digits[i] = 0);
  }
  digits[nineNum] = digits[nineNum] ? digits[nineNum] + 1 : 1;
  return digits.reverse();
};
// @lc code=end

