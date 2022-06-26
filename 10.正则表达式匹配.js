/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!p.includes('*')) return false
  let arr = s.split(''),
    index = arr.findIndex(v => v === '*'),
    str = p.slice(0, index),
    start = s.slice(0, index),
    end = s.substring(index, 1)
  if (str === '.' && start === end || end === str) return true
  if (end !== str || start !== p[0]) return false
};
// @lc code=end

