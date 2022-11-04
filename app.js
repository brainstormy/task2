const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  let result = "";
  let { x, y, operation_type } = req.body
  const enumProp = {
    addition: "addition",
    subtraction: "subtraction",
    multiplication: "multiplication",
  }
  //parse json value
  x = parseInt(x);
  y = parseInt(y);
  switch (operation_type) {
    case enumProp.addition:
      result = x + y
      break;
    case enumProp.subtraction:
      result = x - y
      break;
    case enumProp.multiplication:
      result = x * y
      break;
    default:
      result = "No value found";
  }
  //  console.log(x, y, operation_type, result)
  res.json({
    slackUsername: "Dice",
    operation_type: enumProp[operation_type],
    result: result
  })
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () => console.log(`app listening to ${PORT}`))
