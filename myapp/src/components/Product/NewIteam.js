import React, { Component } from 'react';
import {Link} from 'react-router-dom';
function NewIteam (props){

    const path = `/single?id=${props.id}`
        
        return (
        //     <div className="col-4">
        //     <div className="card-deck">
        //     <div className="card">
        //        <a href={"/product2/"+this.props.tinId}><img className="card-img-top" src={this.props.anh1}
        //        alt="for react router" /></a>
        //         <div className="card-body">
        //         <h4 className="card-title">{this.props.tieuDe1}</h4>
        //         <p className="card-text">{this.props.trichDan}</p>
        //         </div>
        //     </div>
        //     </div>
           
        //     <hr />
            
        // </div>

        <div className="col-md-4 news-grid class1">
        <div className="agile-news-grid-info">
          <div className="news-grid-info-img">
          {/* "assets/images/n1.jpg" */}
            <a href="single.html"><img src={props.anh} alt="" /></a>
            
          </div>
          <div className="news-grid-info-bottom">
            <div className="date-grid">
              <div className="admin">
                <a href="#"><i className="fa fa-user" aria-hidden="true" /> Admin</a>
              </div>
              <div className="time">
                <p><i className="fa fa-calendar" aria-hidden="true" /> May 09,2016</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="news-grid-info-bottom-text">
            
            <Link to= {path} >{props.tieude}</Link>
              <p>{props.trichdan}</p>
              
            </div>
          </div>
        </div>
      </div>
                
        );
    
}
export default NewIteam;