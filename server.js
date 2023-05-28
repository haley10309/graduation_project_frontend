const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// 사용자 입장에서 볼수 있는 api에 출력
app.get('/api/Input', (req, res) => {
    console.log("서버 열렸돠");
    res.send([
        {
            'id' : 1
        }
    ])
})

//동작 중인지 확인
app.listen(port, () => console.log(`Listening on port ${port}`));