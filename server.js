const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/Input',(req,res) => {
    res.send({message: '졸업까지 힘내자'});
});

app.listen(port, () => console.log(`listening on port ${port}`));