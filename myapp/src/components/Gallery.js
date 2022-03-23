import React,{Component, useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Listproduct from './Listproduct';
import NewIteam from './Product/NewIteam';

  function Gallery(){
    const [lists,setlists] = useState([])
    useEffect(()=>{
      fetch("http://localhost:3333/lists").then(res=>res.json()).then(res=>setlists(res))
     
    },[])
    console.log(lists)
    const iteams= lists.map(test=>{
      return (<NewIteam key ={test.id} id = {test.id} tieude={test.tieuDe} anh ={test.anh1} trichdan={test.trichDan}/>)
    })
    // state = {
    //     data: [],
    // };

    const [data,setState] = useState([])
    
    useEffect(()=>{
    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result => this.setState({data:result}))
        .catch(err => console.error(err));
    },[])


        return(

            <div>
        {/* banner */}
        <div className="banner about-bg">
          <div className="top-banner about-top-banner">
            <div className="container">
              <div className="top-banner-left">
                <ul>
                  <li><i className="fa fa-phone" aria-hidden="true" /> +1 234 567 8901</li>
                  <li><a href="mailto:example@email.com"><i className="fa fa-envelope" aria-hidden="true" /> mail@example.com</a></li>
                </ul>
              </div>
              <div className="top-banner-right">
                <ul>
                  <li><a className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a className="facebook" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a className="facebook" href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                  <li><a className="facebook" href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="header">
            <div className="container">
              <div className="logo">
                <h1>
                  <a href="index.html">My Trip</a>
                </h1>
              </div>
              <div className="top-nav">
                <nav className="navbar navbar-default">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">Menu						
                  </button>
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><a href="services.html">Services</a></li>
                      {/* <li><a href="codes.html">Codes</a></li>	 */}
					           <li><Link to='/gallery'>Gallery</Link></li>
                      <li><a href="contact.html">Contact</a></li>
                    
                      <div className="clearfix"> </div>
                    </ul>	
                  </div>	
                </nav>		
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //banner */}
        {/* a-about */}
        <div className="a-grid">
          {/* <div className="container"> */}
            {/* <div className="w3l-about-heading">
              <h2>Our Gallery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
            </div> */}
            

           
              
          <div className="container">

          <div className="news">
            <div className="news-heading">
              <h3>Các điểm đến lý tưởng</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
            </div>
          
            <div className="news-grids">

            
              
              
              
              
              {/* <div className="col-md-4 news-grid class1">
                <div className="agile-news-grid-info">
                  <div className="news-grid-info-img">
                    <a href="single.html"><img src="assets/images/n3.jpg" alt="" /></a>
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
                    <Link to='/single'>Quisque gravida, nunc eu interdum porta</Link>
                      <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {iteams}
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
            <div className="gallery">	
              <div className="gallery-bg">
                <div className="gallery-bg-text effect-2">
                  <Link to='/single' className="big"><img src="assets/images/g1.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></Link>
                    {/* <a href="assets/images/g1.jpg" className="big"><img src="assets/images/g1.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></a>
                  */}
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="assets/images/g2.jpg"><img src="assets/images/g2.jpg" alt="" title="Donec dictum nisi sit amet ex volutpat interdum." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g3.jpg"><img src="assets/images/g3.jpg" alt="" title="Ut dignissim ipsum dolor, in scelerisque neque commodo sit amet." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g4.jpg"><img src="assets/images/g4.jpg" alt="" title="Nulla molestie nulla et dolor commodo pharetra." /></a>
                </div>
              </div>
              <div className="clearfix" />
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g5.jpg"><img src="assets/images/g5.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></a>
                </div>
              </div>
              <div className="gallery-bg">
                <div className="gallery-bg-text effect-2">
                  <a href="images/g7.jpg" className="big"><img src="assets/images/g7.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g6.jpg"><img src="assets/images/g6.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g8.jpg"><img src="assets/images/g8.jpg" alt="" title="Nulla molestie nulla et dolor commodo pharetra." /></a>
                </div>
              </div>
              <div className="clearfix" />
              <div className="gallery-bg">
                <div className="gallery-bg-text effect-2">
                  <a href="images/g9.jpg" className="big"><img src="assets/images/g9.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g2.jpg"><img src="assets/images/g2.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g5.jpg"><img src="assets/images/g5.jpg" alt="" title="Maecenas aliquam nec arcu at efficitur." /></a>
                </div>
              </div>
              <div className="gallery-small gallery-middle">
                <div className="gallery-small-text effect-3">
                  <a href="images/g6.jpg"><img src="assets/images/g6.jpg" alt="" title="Nulla molestie nulla et dolor commodo pharetra." /></a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        {/* </div> */}
        {/* //a-about */}
        {/* footer */}
        <div className="footer">
          <div className="container">
            <div className="footer-grids">
              <div className="col-md-3 footer-grid">
                <div className="footer-grid-heading">
                  <h4>Address</h4>
                </div>
                <div className="footer-grid-info">
                  <p>Eiusmod Tempor inc
                    <span>St Dolore Place,Kingsport 56777.</span>
                  </p>
                  <p className="phone">Phone : +1 123 456 789
                    <span>Email : <a href="mailto:example@email.com">mail@example.com</a></span>
                  </p>
                </div>
              </div>
              <div className="col-md-3 footer-grid">
                <div className="footer-grid-heading">
                  <h4>Navigation</h4>
                </div>
                <div className="footer-grid-info">
                  <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-grid">
                <div className="footer-grid-heading">
                  <h4>Follow</h4>
                </div>
                <div className="social">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-rss" /></a></li>
                    <li><a href="#"><i className="fa fa-vk" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-grid">
                <div className="footer-grid-heading">
                  <h4>Newsletter</h4>
                </div>
                <div className="footer-grid-info">
                  <form action="#" method="post">
                    <input type="email" id="mc4wp_email" name="EMAIL" placeholder="Enter your email here" required />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="copyright">
              <p>© 2016 My Trip . All Rights Reserved | Design by <a href="http://w3layouts.com/"> W3layouts</a> </p>
            </div>
          </div>
        </div>
      
        {/* //footer */}
      </div>
            // <div>
            //     <section className="inner-page-banner" id="home"></section>
            //     <div className="breadcrumb-agile">
            //     	<ol className="breadcrumb mb-0">
		    //             <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
		    //             <li className="breadcrumb-item active" aria-current="page">listproduct</li>
	        //         </ol>
            //     </div>

            //     <section className="gallery py-5" id="gallery">
            //     <div className="container py-md-5">
	        //         <h3 className="heading text-center mb-3 mb-sm-5">Our listproduct</h3>
            //         <div className="gallery-content">
            //             <div className="row">{
            //                 this.state.data.map((value,key) => {
            //                     return (
            //                         <Listproduct key={key}  
            //                         tieuDe1={value.product_Name}
            //                         anh1={value.product_Img} 
            //                         > </Listproduct>
            //                     )
            //                 }) 
            //             }
            //             </div>
            //             <div id="gal1" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/m1.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                 </div>
            //             </div>
            //             <div id="gal2" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/g2.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                 </div>
            //             </div>
            //             <div id="gal3" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/g3.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                     <button type="button" className="btn btn-default">button</button>
            //                 </div>
            //             </div>
            //             <div id="gal4" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/g4.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                 </div>
            //             </div>
            //             <div id="gal5" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/g5.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                 </div>
            //             </div>
            //             <div id="gal6" className="popup-effect">
            //                 <div className="popup">
            //                     <img src="assets/images/g6.jpg" alt="Popup image" className="img-fluid mt-4" />
            //                     <a className="close" href="#gallery">&times;</a>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     </section>
            // </div>
        )
    
}
export default Gallery