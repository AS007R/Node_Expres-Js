const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use((req, res) => {
  console.log("Request Received");
  // res.send("Basic Response");
  // String recponse
  // res.send({
  //   name: "Asad Subhani",
  //   age: 24,
  // });
  // Object recponse
  code = "<h1>Information</h1><ul><li>Asad Subhani</li><li>24</li></ul>";
  res.send(code);
  // HTML recponse
});
