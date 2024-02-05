const express = require('express');
const cors = require('cors');

require('./db/mongoose');
const imagesRouter = require('./routers/imagesRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(imagesRouter)

app.use('/', (req,res) => {
  res.send('ok');
});


const port = process.env.PORT;
app.listen(port, () => console.log(`server connected on port ${port}`));