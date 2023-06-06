import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default function About() {
  //css 할 변수
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
//css 끝




  return (
    <div className="prediction_page">
      <h1 className="refer-title">
      프로젝트 개발자</h1>
      <img className="AboutImg" alt="role" src="/img/role.png" />
      <h1 className="people_date">
      - 1년 간 기록 </h1>
      <Wrap>
    <h1 className="people_date">
      2022년 9월 5일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_9_5.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 9월 9일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_9_9.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 9월 20일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_9_20.png" />
      </div>
    
    </Wrap>
      <Wrap>
    <h1 className="people_date">
      2022년 9월 22일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_9_22.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 9월 23일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_9_23.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 10월 13일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_10_13.jpg" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 10월 25일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_10_25.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 10월 28일 
      오프라인 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_10_28.jpg" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 10월 30일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_10_30.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 11월 3일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_11_03.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 11월 14일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_11_14.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2022년 11월 18일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2022 졸프 사진" src="/img/22_11_18.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 3월 8일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_3_8.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 3월 15일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_3_15.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 3월 21일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_3_21.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 3월 28일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_3_28.jpg" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 4월 4일 오프라인 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_4_7.jpeg" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 4월 20일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_4_20.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 4월 24일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_4_24.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 4월 25일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_4_25.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 5월 7일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_5_7.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 5월 21일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_5_21.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 5월 22일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_5_22.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 5월 23일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_5_23.png" />
      </div>
    
    </Wrap>
    <Wrap>
    <h1 className="people_date">
      2023년 5월 29일 줌 미팅 </h1>
    
    <hr className="time_line"/>
    <div>
        <img className="people_img" alt="2023 졸프 사진" src="/img/23_5_29.png" />
      </div>
    
    </Wrap>
    </div>
  );
}
