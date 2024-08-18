const fs = require("fs");

const filePath =
  "C:\\Users\\hp\\Desktop\\MERN Stack\\Cohort\\Web Dev\\Week 2\\week-2-async-js\\medium\\a.txt";

fs.readFile(filePath, "utf-8", function (err, data) {
  console.log("Before cleaning: " + data);
  let str = data;
  let arr = str.split(" ").filter(Boolean);
  str = arr.join(" ");

  fs.writeFile(filePath, str, "utf-8", function () {
    console.log("Cleaner Implemented");
  });
});
