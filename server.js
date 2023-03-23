const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5010;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/proteinInput', (req, res) => {
    res.send([

    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));