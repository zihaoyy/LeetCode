/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var count = 0
  var num = 0
  arr = (n + '').split('');
  while (count != 1) {
    for (var i = 0; i < arr.length; i++) {
      count = arr[i] * arr[i] + count;
    }
    arr = (count + '').split('');
    if (count == 1) return true
    if (num > 10e3) return false
    count = 0;
    num++
  }
};
// @lc code=end

