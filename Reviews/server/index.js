const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());
app.use(express.static('../client/dist'));








app.listen(port, () => {
  console.log(`Server is listening on  http://localhost:${port}`)
})