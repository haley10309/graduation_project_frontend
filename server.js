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
    res.send([
        {
            'id': 1,
            'image' : 'https://placeimg.com/64/64/4',
            'name' : '김민수',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '개발자' 
          }
    ])
})

//동작 중인지 확인
app.listen(port, () => console.log(`Listening on port ${port}`));