/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s, res = [], arr = [], start = 0) {
  if (s.length > 12 || s.length < 4) return res;
  if (arr.length == 4 && start == s.length) res.push(arr.join('.'));
  for (let i = start; i < s.length; i++) {
    let str = s.substring(start, i + 1), 
        strToNum = str - 0;
    if (strToNum > 255 || str != strToNum + '') break;
    arr.push(str);
    restoreIpAddresses(s, res, arr, i + 1);
    arr.pop();
  }
  return res;
};
// @lc code=end

