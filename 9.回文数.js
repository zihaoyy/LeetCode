/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x),
    l = str.length,
    start,
    end;
  if (x < 0) return false
  if (l % 2 === 0) {
    // 偶数
    start = str.slice(0, l / 2)
    end = str.slice(l / 2).split('').reverse().join('')
    return start == end ? true : false
  } else {
    // 奇数
    start = str.slice(0, Math.floor(l / 2))
    end = str.slice(Math.ceil(l / 2))
    return start == end ? true : false
  }
};
// @lc code=end

