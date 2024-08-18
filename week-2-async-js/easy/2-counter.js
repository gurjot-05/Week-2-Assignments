let ans = 0;

function counter() {
  console.log(ans);
  ans = ans + 1;
  setTimeout(counter, 1000);
}

counter();