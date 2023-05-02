import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Prediction() {
  const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  background: #ccadbb78;
  max-width: 62%;
  margin: 0 auto;
`;
  return (
    <div className="prediction-page">
      <h1 className="refer-title">
        단백질 구조 예측 AI
      </h1>
      <h1 className="title-N1">
        1. 단백질 구조 예측 AI의 의의
      </h1>
      <h1 className="title-N1-1">
        1-1. 단백질
      </h1>
      <h1 className="english-protein-explaination">
      Proteins are large biomolecules and macromolecules that comprise one or more long chains of amino acid residues.(Wikipedia “Protein”)
      </h1>
      <h1 className="korean-protein-expaination">
      단백질은 아미노산으로 구성된 생체 고분자로서, 펩타이드 결합에 의해 길게 연결된 폴리펩타이드(polypeptide) 사슬을 말한다.
      </h1>
      
      
      <Wrap>
      <div>
        <img className="peptide_img" alt="role" src="/img/peptide_bond.jpeg" />
      </div>
      <div>
        <img className="amino_img" alt="role" src="/img/amino_acid_residue.png" />
      </div>
      </Wrap>
    </div>
    
    
  );
}