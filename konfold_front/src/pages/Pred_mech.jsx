import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import NavBar_Prediction from '/Users/hayungyoo/konfold/konfold_front/src/pages/NavBar_Prediction.js';


export default function Pred_mech(){

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
        2. 단백질 구조 예측 AI 메커니즘
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      ‘Deepmind’에서 개발한 단백질 구조 예측 인공지능(AI) 프로그램
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
AlphaFold는 단백질 구조예측 학술대회 CASP(Critical Assessment of Structure Prediction)에서 공개되었다. 팀에게 전달되는 아미노산 서열을 보고 해당 단백질 구조를 예측하는 방식으로, AlphaFold는 다른 팀에 비해 엄청난 정확도를 가진 예측결과를 빠르게 얻어냈다.
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      AlphaFold1(2018, CASP13 우승)
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      AlphaFold2(2020, CASP14 우승) 
      </h1>
      <Wrap >
      <div>
        <img className="process_img" alt="role" src="/img/structure_prediction_precise.jpeg" />
      </div>
      
      </Wrap>
      <Wrap>
      <hi className="img_title">
      그림 4 단백질 구조 예측 정확도 발전 추이
          
        </hi>
       
        </Wrap>

        <h1 className="korean-protein-expaination">
      <Span /><Span />
      AlphaFold는 아미노산 사슬의 단위체인 잔기(amino acid residue) 간의 거리와 각도에 대한 정보를 추출하여 그것을 물리 시뮬레이션의 제약조건으로 사용한다. Residue는 사슬 내에서 서로 상호작용한다는 사실을 바탕으로 상호작용의 정도를 추측하는 것이다. AlphaFold1은 학습의 주요 기술로서 합성곱 신경망(CNN, Convolution Neural Network)를 이용한다. AlphaFold2는 새로 개발한 학습 모델인 트랜스포머(Transformer)를 이용하며 AlphaFold1에비해 더 많은 단백질 구조 데이터를 학습한다.
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      2022년 7월 AlphaFold2의 논문과 오픈소스, 데이터베이스가 공개되었다. 공개된 자료에 따른 AlphaFold2의 아키텍처는 다음과 같이 3단계로 구성된다.
      </h1>
      <hi className="ref_left">
      AlphaFold 참고자료
        </hi>
        
      <hi className="ref_left">
      Website<Span /><Span />https://www.deepmind.com/research/highlighted-research/alphafold

        </hi>
        
      <hi className="ref_left">
      Source <Span /><Span />https://github.com/deepmind/alphafold
        </hi>
        <hi className="ref_left">
        Paper<Span /><Span />	“Highly accurate protein structure prediction with AlphaFold(2021)”
        </hi>
        <hi className="ref_left">
        <Span /><Span /><Span /><Span />	“Supplementary information for: Highly accurate protein structure prediction with AlphaFold(2021)”
        </hi>
        <hi className="ref_left">
        <Span /><Span /><Span /><Span />	“AlphaFold Protein Structure Database: massively expanding the structural coverage of protein sequence space with high-accuracy models(2022)”
        </hi>
        <div>
        <img className="process_img" alt="role" src="/img/model_architecture.png" />
      </div>
      <hi className="img_title">
      그림 5 AlphaFold2 model architecture
        </hi>
        <h1 className="korean-protein-expaination">
      1단계. Input Feature embeddings, 입력 데이터 전처리
       </h1>
       <h1 className="korean-protein-expaination">
       <Span /><Span />입력 데이터를 모델에서 사용할 수 있게 전처리하는 단계이다. 단백질 서열이 입력되면 데이터베이스에서 유사한 서열을 검색하여 다중서열정렬(MSA, Multiple Sequence Alignment)를 생성하고, 알려진 단백질 템플릿에서 유사한 서열을 가진 부분을 pairing한다. 그리고 이를 통합해 MSA representation과 Pair representation을 만든다. 이 과정을 여러 번 반복한 결과의 평균값을 다음단계로 내보낸다.
       </h1>
       <hi className="ref_left">
        <Span /><Span />
        input: amino-acid sequence
        </hi>
        <hi className="ref_left">
        <Span /><Span />	
        output: Create the initial version of the MSA representation and pair representation
        </hi>
        <hi className="ref_left">
        <Span /><Span />	
        -Genetic database search 🡪 MSA 🡪 MSA representation (진화적 특징 반영)
        </hi>
        <hi className="ref_left">
        <Span /><Span />	
        -Amino acid paring 🡪 2차원 형태로 변환 🡪 pair representation (공간적 특징 반영)        </hi>
        <h1 className="korean-protein-expaination">
        2단계. Evoformer, Attention 학습을 통해 전처리된 데이터에서 필요한 정보를 뽑아냄
       </h1>
       <div>
        <img className="process_img" alt="role" src="/img/evoformer_block.png" />
      </div>
      <hi className="img_title">
      그림 6 Evofomer block
      </hi>
      <h1 className="korean-protein-expaination">
      주어진 MSA representation과 pair representation을 self-attention 메커니즘에 적용하여 필요한 정보만 갖도록 개선하는 단계이다. 이 단계에서는 각각의 representation이 입력되어 단백질의 공간적, 진화적 관계에 대한 직접적인 추론을 가능하게 하는 정보를 교환함으로써 반복적으로 개선된다. 그 결과 단백질 구조에 대한 2D representation을 얻게 된다. 
       </h1>


      
        </div>
    )
}