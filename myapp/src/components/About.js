import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
//             <div>
//                 {/* <!-- banner --> */}
// <section class="inner-page-banner" id="home">
// </section>
// {/* <!-- //banner -->
// <!-- page details --> */}
// <div class="breadcrumb-agile">
// 	<ol class="breadcrumb mb-0">
// 		<li class="breadcrumb-item">
// 			<Link to='/'>Home</Link>
// 		</li>
// 		<li class="breadcrumb-item active" aria-current="page">About Us</li>
// 	</ol>
// </div>
// {/* <!-- //page details -->
// 	<!--about-mid --> */}
   

//             </div>
<div>
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
  <div className="container">
    <div className="w3l-about-heading">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
    </div>
    <div className="agileits-a-about-grids">
      <div className="col-md-5 agileits-a-about-left">
        <img src="images/a1.jpg" alt="" />
      </div>
      <div className="col-md-7 agileits-a-about-right">
        <h3>A few words about us</h3>
        <h4>Praesent et aliquam erat, in pellentesque erat. Nulla massa nisl, vulputate nec urna vel, sagittis rhoncus leo. Donec pharetra congue tellus sed fringilla. Aliquam tellus est, mattis id nulla at, placerat bibendum velit. </h4>
        <p>Fusce tincidunt vitae purus in interdum. Sed mattis erat vitae nunc dignissim, a facilisis elit porta. Nam a dui id magna tempus tempor. Mauris vel nunc nec ante semper facilisis a sit amet dolor. Aliquam viverra ex felis, consequat condimentum augue ultrices vel. Pellentesque sed nibh ac diam tempor fringilla sit amet a tortor. Praesent sodales sapien turpis.
          <span>Maecenas vestibulum rhoncus rhoncus. Pellentesque ullamcorper consectetur elit sit amet rhoncus. Maecenas lobortis est vel odio volutpat laoreet. Praesent pharetra interdum lorem, eleifend ullamcorper sapien mattis efficitur. Phasellus sed nisi ultrices, sodales enim non, ullamcorper sapien. Nullam mollis tempus mauris in vulputate.</span>
        </p>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>
{/* //a-about */}
{/* different */}
<div className="jarallax different">
  <div className="container">
    <div className="w3-different-heading">
      <h3>Why we are different</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
    </div>
    <div className="w3agile-different-info">
      <p>Cras vehicula massa id ipsum venenatis, non convallis libero pellentesque. Sed tristique massa et mattis mattis. Nunc euismod consequat ex, eu tincidunt justo malesuada vitae. Sed auctor diam quis nulla hendrerit porta. Quisque venenatis, tortor quis tristique congue, lorem lectus elementum augue, in laoreet lorem justo lacinia velit. Phasellus tempus luctus velit, eu fermentum arcu porttitor sit amet. Suspendisse id efficitur sem. Donec laoreet ante at facilisis dictum. Donec sodales porta orci sed porta. Vivamus est enim, pharetra sit amet placerat ut, eleifend quis purus. Sed elementum tortor erat, placerat rutrum augue facilisis vel. Morbi feugiat tortor erat, nec gravida mauris egestas tincidunt. Sed vitae dignissim sapien.</p>
      <div className="w3agile-button">
        <a href="single.html">Read More</a>
      </div>
    </div>
  </div>
</div>
{/* //different */}
{/* team */}
<div className="team">
  <div className="container">
    <div className="agileinfo-team-heading">
      <h3>Our Team</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
    </div>
    <div className="team-grids">
      <div className="col-md-33 agileinfo-team-grid">
        <img src="assets/images/t1.jpg" alt="" />
        <div className="captn">
          <h4>Đức Tâm</h4>
          <p>Vestibulum </p>
          <div className="w3l-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-33 agileinfo-team-grid">
        <img src="assets/images/t1.jpg" alt="" />
        <div className="captn">
          <h4>Mary Jane</h4>
          <p>Vestibulum </p>
          <div className="w3l-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-33 agileinfo-team-grid">
        <img src="images/t2.jpg" alt="" />
        <div className="captn">
          <h4>Peter Parker</h4>
          <p>Aliquam non</p>
          <div className="w3l-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-33 agileinfo-team-grid">
        <img src="images/t3.jpg" alt="" />
        <div className="captn">
          <h4>Johan Botha</h4>
          <p>Nulla molestie</p>
          <div className="w3l-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-33 agileinfo-team-grid">
        <img src="images/t4.jpg" alt="" />
        <div className="captn">
          <h4>Steven Wilson</h4>
          <p>Quisque vitae</p>
          <div className="w3l-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>
{/* //team */}
{/* footer */}
<div className="footer">
  <div className="container">
    <div className="footer-grids">
      <div className="col-md-33 footer-grid">
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
      <div className="col-md-33 footer-grid">
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
      <div className="col-md-33 footer-grid">
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
      <div className="col-md-33 footer-grid">
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
</div>
	
        )
    }
}
export default About