function solve(si, pi, s, p, dp) {
  if (pi < 0 && si < 0) {
    return true;
  }
  if (pi < 0) {
    return false;
  }
  if (si < 0) {
    if (p[pi] == "*") {
      return solve(si, pi - 2, s, p, dp);
    } else {
      return false;
    }
  }
  if (dp[si][pi] != -1) {
    return dp[si][pi];
  }
  if (s[si] == p[pi] || p[pi] == ".") {
    return (dp[si][pi] = solve(si - 1, pi - 1, s, p, dp));
  } else if (p[pi] == "*") {
    ans = solve(si, pi - 2, s, p, dp);
    if (s[si] == p[pi - 1] || p[pi - 1] == ".") {
      ans = ans || solve(si - 1, pi, s, p, dp);
    }
    return (dp[si][pi] = ans);
  }
  return false;
}

function isMatch(s, p) {
  let dp = Array(s.length + 1)
    .fill()
    .map(() => Array(p.length + 1).fill(-1));
  return solve(s.length - 1, p.length - 1, s, p, dp);
}

function generateMatcher(pattern) {
  return function (s) {
    return isMatch(s, pattern);
  };
}
// generateMatcher is a closure that returns a function that can be used to match a string against a pattern

const matcher1 = generateMatcher("aaa*");
const matcher2 = generateMatcher("a*b");
// Each matcher created by calling generateMatcher will retain its own unique pattern with which it was called.
// Each call to generateMatcher creates a new closure with its own scope.
// The pattern variable in each closure will be independent of the others.

console.log(matcher1("aab")); // returns false
console.log(matcher2("aab")); // returns true
console.log("--------");
console.log(matcher1("aa")); // returns true
console.log(matcher2("aa")); // returns false
