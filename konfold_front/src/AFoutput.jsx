import React, { useState , Component} from "react";
import { useEffect } from "react";
import * as $3Dmol from '3dmol/build/3Dmol.js';
import $ from 'jquery';
import Search from "./pages/Search";
import styled from 'styled-components';



export default function AFoutput()  {
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



  const [Protein_input , setProtein_input] = useState("");
  const script = document.createElement("script");
  script.src = "https://3Dmol.org/build/3Dmol-min.js";
  script.async = true;
  document.body.appendChild(script);
  useEffect(() => {
    // fetch("/api/Input")
    //     .then(res=> res.json())
    //     .then(res => {
    //       console.log(res);
    //       setId(res);
    //     });
 
    const script = document.createElement("script");
    script.src = "https://3Dmol.org/build/3Dmol-min.js";
    script.async = true;
    document.body.appendChild(script);
    // setProtein_input(localStorage.getItem('proteinName'));
    // console.log(Protein_input);
  },[]);


  // 시각화
  $(function() {
    let element = $('#id');
    let config = { backgroundColor: 'orange' };
    let viewer = $3Dmol.createViewer( element, config );
    let getId = "pdb:" + "1A00";

    $3Dmol.download(getId, viewer, {}, function() {
      viewer.setStyle({'model': -1}, {"cartoon": {'color': 'spectrum'}})
      viewer.zoomTo();
      viewer.render();
      viewer.zoom(0.8, 2000);
  })


    
  });

      

  return (
    <div className="page">
      
    <div id="id" className="mol-container"></div>
    <h1 className="korean-protein-expaination"></h1>
    <button >Download File</button>
    
  </div>

  );


  }