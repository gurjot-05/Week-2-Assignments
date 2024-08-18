function clock() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  console.clear();
  console.log(hours + ":" + minutes + ":" + seconds);
  if (hours > 12) {
    let newhours = hours - 12;
    console.log("0" + newhours + ":" + minutes + ":" + seconds + " P.M");
  } else {
    console.log(hours + ":" + minutes + ":" + seconds + " A.M");
  }
}

setInterval(clock, 1000);
