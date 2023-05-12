import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NavBar_Prediction from '/Users/hayungyoo/konfold/konfold_front/src/pages/NavBar_Prediction.js';


export default function Pred_skills() {
    const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  background: #f7f7f7 ;
  max-width: 80%;
  margin: 0 auto;
`;
function Span({ space = 20 }){
	return (
    	<span style={{ paddingRight: space }}></span>
    );
}

return (
    <div className="prediction_page">
        <NavBar_Prediction/>
        <h1 className="refer-title">
        단백질 구조 예측 AI
        </h1>
        <h1 className="title-N1">
        3. 주요 기술
      </h1>
      <h1 className="title-N1">
      CNN(합성곱 신경망, Convolutional Neural Networks, ConvNet)
      </h1>

      <h1 className="korean-protein-expaination">
      <Span /><Span />
      Image를 분류하기 위해 1989년 Yann LeCun의 논문에서 고안된 알고리즘으로 Fully Connected Layer만으로 구성된 신경망의 한계를 보완한다. Image는 수많은 픽셀로 이루어져 있는 Matrix이며 픽셀은 0~255 사이의 숫자로 표현된다. 이러한 matrix를 일자로 쭉 펼쳐 실수로 구성된 vector를 input으로 하여 딥러닝 모델을 만들 수 있다.
       </h1>





    </div>
)
}