const fs = require("fs");

const dataToWrite = "You are the best!";

fs.writeFile("Web Dev/Week 2/week-2-async-js/easy/a.txt", dataToWrite, "utf-8", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Done!");
});
