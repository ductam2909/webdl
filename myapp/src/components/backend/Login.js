import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import ViewFooter from './viewFooter';
import { useState } from 'react';

export default function Login() {

  // const [username, setNameus]  = useState('') ;
  // const [password, setPassus]  = useState('') ;
  // const url = "http://localhost:5000/login"
  // const history = useHistory() ;
  // const len = localStorage.length
  // if ( len != 0 ){
  //   history.push('/qlproducts') ;
  // }

  // const handLogin = () => {
  //   let options = {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json;charset=UTF-8"
  //     },
  //     body: JSON.stringify({
  //       "username" : username,
  //       "password" : password
  //     })
  //   };
  //   fetch(url,options)
  //   .then(ris => ris.json())
  //   .then((result) => {
  //     console.log(result.message) ;
  //     if ( result.message === "Invalid username or password"){
  //       window.alert("Đăng nhập thất bại") ;
  //     }
  //     else{
  //       window.alert("Đăng nhập thành công") ;
  //       localStorage.setItem("token",result.token) ;
  //       history.push('/qlproducts')
  //     }
  //   },
  //     () => {
  //       console.log("Đăng nhập thất bại") ;
  //     }
  //   )
  // }


  // const onChangeUsername = (e) => {
  //   setNameus(e.target.value);
  //   console.log(username)
  // };
  // const onChangePassword = (e) => {
  //   setPassus(e.target.value);
  //   console.log(password)
  // };
  
  return(
    // <div className = 'magic'>
    //   <meta charSet="utf-8" />
    //   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    //   <link href="css/styles.css" rel="stylesheet" />
    //     <div id="layoutAuthentication">
    //       <div id="layoutAuthentication_content">
    //         <main>
    //         <div className="container">
    //           <div className="row justify-content-center">
    //             <div className="col-lg-5">
    //               <div className="card shadow-lg border-0 rounded-lg mt-5">
    //                 <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
    //                 <div className="card-body">
    //                     <div className="form-floating mb-3">
    //                       <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" onChange = {onChangeUsername} />
    //                       <label htmlFor="input" >Username</label>
    //                     </div>
    //                     <div className="form-floating mb-3">
    //                       <input className="form-control" id="inputPassword" type="password" placeholder="Password" onChange = {onChangePassword} />
    //                       <label htmlFor="inputPassword">Password</label>
    //                     </div>
    //                     <div className="form-check mb-3">
    //                       <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
    //                       <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
    //                     </div>
    //                     <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
    //                       <Link to="/resetpass">
    //                         <div className="small">Forgot Password?</div>
    //                       </Link>
    //                       {/* <Link to="/qlusers"> */}
    //                         <div className="btn btn-primary" onClick = {handLogin}>Login</div>
    //                       {/* </Link> */}
    //                     </div>
    //                 </div>
    //                 <div className="card-footer text-center py-3">
    //                   <div className="small"><a href="/reginster">Need an account? Sign up!</a></div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         </main>
    //       </div>
    //       <div id="layoutAuthentication_footer">
    //         <ViewFooter/>
    //       </div>
    //     </div>
    // </div>

  //   <div className='clsslogin'>
  //   <h1>Login du lịch Đà Nẵng</h1>
  //   <div className="main-w3">
  //     <form action="#" method="post">
  //       <h2><span className="fa fa-user t-w3" aria-hidden="true" /></h2>
  //       <div className="login-w3ls">
  //         <div className="icons">
  //           <input type="email" name="email" placeholder="Email" required />
  //           <span className="fa fa-user" aria-hidden="true" />
  //           <div className="clear" /> 
  //         </div> 		   
  //         <div className="icons">
  //           <input type="password" name="password" placeholder="Password" required />
  //           <span className="fa fa-key" aria-hidden="true" />
  //           <div className="clear" />
  //         </div>
  //         <div className="btnn">
  //           <input type="checkbox" className="ckkss" /><span className="span">Remember me..?</span><br />
  //           <button type="submit">Login</button><br />
  //           {/* <a href="#" className="for">Forgot password...?</a>   */}
  //           <Link to="/reginster" className="for">Forgot password...? </Link>
  //         </div>	
  //       </div>
  //     </form>
  //   </div>
  // </div>

  <div className='clss11'>

  
  <div id="layoutAuthentication">
  <div id="layoutAuthentication_content">
    <main>
      <div className="container2">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
              <div className="card-body">
                <form>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small" href="password.html">Forgot Password?</a>
                    <a className="btn btn-primary" href="index.html">Login</a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small"> <Link to="/reginster" className="for">Need an account? Sign up!</Link>
                  </div>
              </div>
            </div>
          </div>
          {/* <div className="btnn">
            <input type="checkbox" className="ckkss" /><span className="span">Remember me..?</span><br />
            <button type="submit">Login</button><br />
            <a href="#" className="for">Forgot password...?</a>  
          </div>	 */}
        </div>
      </div>
    </main>
  </div>
  <div id="layoutAuthentication_footer">
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright © Your Website 2021</div>
          
        </div>
      </div>
    </footer>
  </div>
</div>

</div>
  )
} 