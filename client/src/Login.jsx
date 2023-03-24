import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [protein, setProtein] = useState("");

  function Ptest(e) {
    window.location.href = "/Login";
    axios.post("/Login", { proName: this.state.protein });
    //api post
    const register = () => {
      axios
        .post("http://localhost:1337/api/auth/local/register", {
          proteinName: protein,
        })
        .then((response) => {
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    };
  }

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
        <button disabled={false} onClick={Ptest} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}
