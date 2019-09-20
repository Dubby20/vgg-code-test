function input(param) {
  var str = param.split('');
  str.reduce(function(accum, curr) {
    return accum + curr;
  }, 0);
  if (str.length % 2 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

input('{()');
input('{(())}');
