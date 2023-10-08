const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.post("/:operation", (req, res) => {
  const { num1, num2 } = req.body;
  const operation = req.params.operation;

  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }

  switch (operation) {
    case "add":
      const sum = num1 + num2;
      if (sum > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (sum < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The sum of given two numbers",
          sum,
        });
      }
      break;

    case "sub":
      const difference = num1 - num2;
      if (difference > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (difference < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The difference of given two numbers",
          difference,
        });
      }
      break;

    case "multiply":
      const result = num1 * num2;
      if (result > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (result < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The product of given numbers",
          result,
        });
      }
      break;

    case "divide":
      if (num2 === 0) {
        res.json({ status: "error", message: "Cannot divide by zero" });
      } else {
        const divisionResult = num1 / num2;
        if (divisionResult > 1000000) {
          res.json({ status: "error", message: "Overflow" });
        } else if (divisionResult < -1000000) {
          res.json({ status: "error", message: "Underflow" });
        } else {
          res.json({
            status: "success",
            message: "The division of given numbers",
            result: divisionResult,
          });
        }
      }
      break;

    default:
      res.status(400).json({ status: "error", message: "Invalid operation" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
