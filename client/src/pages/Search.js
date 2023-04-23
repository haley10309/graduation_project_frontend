import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";
import instance from "../Request";



export default function Search(){
    
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinName, setProteinName] = useState(""); // 저장 후 변수
  const handleInput = (event) => {
    setProtein(event.target.value); //변수 저장 완료
    
  };
  
  
   const confirm = async (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();
    setProteinName(protein)
    window.location.href = "/proteinInput";
    await axios.post("http://localhost:5000/api/Input",
      {Name : proteinName},
      {
        headers : {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then(function (response) {
      console.log(proteinName);
     }).catch(function (error){
      console.log(error);
     })
     
    
    console.log(proteinName);

    
    //api post
      
    localStorage.setItem("proteinName", proteinName);
    //localstorage 업로드
  };

  return (
    <div className="page">
      <div className="titleprotein">단백질 시퀀스를 입력해 주세요</div>

      <div className="contentWrap">
        <div className="inputTitle">단백질 시퀀스</div>
        <div className="inputWrap">
          <input
            className="input"
            value={protein} //input으로 받은 프로틴 시퀀스
            onChange={handleInput}
          />

          {/* place holder 넣어 보기 */}
        </div>

        <div className="errorMessageWrap">올바른 시퀀스를 입력해 주세요</div>
      </div>
      <div>
        <button disabled={false} onClick={confirm} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}
