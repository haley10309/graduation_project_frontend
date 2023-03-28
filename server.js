const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
import Login from './client/src/Login';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// 사용자 입장에서 볼수 있는 api에 출력
app.get('/api/proteinInput', (req, res) => {
    res.send([
        res.send('hello world')
    ])
})
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

//동작 중인지 확인
app.listen(port, () => console.log(`Listening on port ${port}`));