import { colors } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
function NewIteam2 (props){

    const path = `/single?id=${props.id}`
  
  //  const st=  window.location.reload();  
  function refreshPage() {
    window.location.href="/single?id="+props.id;
  }  
        return (
    
            <div className="news-grid-info-bottom-text">
                <li><a onClick={refreshPage}>{props.tieude}</a></li>
            {/* <Link to= {path}  onClick={refreshPage}>{props.tieude}</Link> */}
           
      </div>
                
        );
    
}
export default NewIteam2;