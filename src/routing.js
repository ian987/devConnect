const express = require("express");

const app = express();

//This will handle all the below request. DONT ADD ON THE TOP
// app.use("/", (req, res) => {
//   res.send("Server Dashboard");
// });

// app.use("/test", (req, res) => {
//   res.send("Test from server");
// });

// GET METHOD
app.get("/user", (req, res) => {
  // GET REQUEST DATA
  console.log(req.query);

  res.send({
    firstname: "KUKIL",
    lastname: "BORA",
  });
});

// POST METHOD
app.post("/user", (req, res) => {
  res.send({
    firstname: "ELENA",
    lastname: "BORA",
  });
});

// DELETE METHOD
app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});

// GET PARAMS
app.get("/user/:userID", (req, res) => {
  console.log(req.params);
  res.send("Get params from request");
});

// This will not work as the above /test will override/handle the request
// Anything after /test/.... will be handled by the above /test
app.use("/test/2", (req, res) => {
  res.send("Test 2 from server");
});

// b is optional => /abc, /ac will work
// WILL WORK FOR VERSION 4 NOT 5
// app.get("/ab?c", (req, res) => {
//   res.send("Test from server");
// });

// Any number of b => /abc, /abbbbbb..c will work
// app.get("/ab+c", (req, res) => {
//   res.send("Test from server");
// });

// // Anything that starts with ab and ends with cd => /abcd, /abAJAYcd will work
// app.get("/ab*cd", (req, res) => {
//   res.send("Test from server");
// });

// // bc is optional => /abcd, /ad will work
// app.get("/a(bc)?d", (req, res) => {
//   res.send("Test from server");
// });

// // regex will also work => anything that ends with fly will work
// app.get(/.*fly$/, (req, res) => {
//   res.send("Test from server");
// });

app.listen(7777, () => {
  console.log("Listening to port 7777....");
});
