import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Prediction() {
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
      
      
      <Wrap >
      <div>
        <img className="peptide_img" alt="role" src="/img/peptide_bond.jpeg" />
      </div>
      <div>
        <img className="amino_img" alt="role" src="/img/amino_acid_residue.png" />
      </div>
      </Wrap>
      <br />
      <Wrap>
        
      <hi>
          그림 1 펩타이드 결합  
          <br />
        </hi>
        <Span /><Span />
        <hi >
        
            그림 2 amino acid residue
        </hi>
        </Wrap>
        <h1 className="protein_kind">
        단백질은 생명체의 몸을 구성하는 기본물질이자 세포 차원에서 이루어지는 거의 모든 생명 활동에 관여하는 매개체이다. 사람의 유전자는 생명 활동의 명령을 내리고 그것의 수행자로서 단백질을 만들어낸다. 따라서 인체 내엔 생화학 반응을 조절, 매개하는 효소단백질, 성장 및 생체 대사를 촉진하는 호르몬 단백질, 면역 조절 및 반응을 매개하는 면역단백질, 암 발병을 억제하는 암억제인자, 항체 단백질 등 다양한 종류와 기능을 가진 단백질들이 있다. 
        </h1>


    </div>
    
    
  );
}