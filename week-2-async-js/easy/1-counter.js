let ans = 0;

function counter() {
  console.log(ans);
  ans = ans + 1;
}
setInterval(counter, 1000);
