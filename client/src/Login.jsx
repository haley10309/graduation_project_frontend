import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]

  const confirm = (e) => {
    // 확인 후 다음 페이지
    e.preventDefault();
    window.location.href = "/Login";

    axios
      .post("http://localhost:5000/api/proteinInput", {
        proName: this.state.protein,
      })
      .then((res) => console.log("Posting data", res))
      .catch((error) => {
        console.log("error occurred: ", error.response);
      });
    //api post
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
            onChange={(e) => setProtein(e.target.value)}
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
