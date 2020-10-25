module.exports = function reverse (n) {
  
   return parseInt((Math.abs(n)+'').split('').reverse().join(''));
}