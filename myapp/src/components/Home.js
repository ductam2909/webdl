import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import NewIteam from './Product/NewIteam'
function Home(){

        return(
       
            <div>
				<div className="banner">
          <div className="top-banner">
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
                  <a href="index.html">Du lịch Đà Nẵng  </a>
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
        <div id="kb" className="carousel kb_elastic animate_text kb_wrapper" data-ride="carousel" data-interval={6000} data-pause="hover">
          {/* Wrapper for Slides */}
          <div className="carousel-inner" role="listbox">
            {/* First Slide */}
            <div className="item active">
              <div className="slider">
                <div className="carousel-caption kb_caption slider-grid">
                  <h3>Singapore</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="item">
              <div className="slider slider1">
                <div className="carousel-caption kb_caption kb_caption_right slider-grid">
                  <h3>Hawaii</h3>
                  <p>Vivamus vel nulla venenatis, tincidunt mi vel, consequat erat.</p>
                </div>
              </div>
            </div>
            {/* Third Slide */}
            <div className="item">
              <div className="slider slider2">
                <div className="carousel-caption kb_caption kb_caption_center slider-grid">
                  <h3>Hong Kong</h3>
                  <p>Nunc turpis purus, vestibulum at quam ac, feugiat dignissim nunc</p>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          {/* Left Button */}
          <a className="left carousel-control kb_control_left" href="#kb" role="button" data-slide="prev">
            <span className="fa fa-angle-left kb_icons" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          {/* Right Button */}
          <a className="right carousel-control kb_control_right" href="#kb" role="button" data-slide="next">
            <span className="fa fa-angle-right kb_icons" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div> 
        {/* about */}
        <div className="about">
          <div className="container">
            <div className="w3l-about-heading">
              <h2>Top Tours</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
            </div>
            <div className="about-grids">
              <div className="col-md-3 about-grid">
                <div className="about-grid-info effect-1">
                  <h4>San Francisco</h4>
                </div>
              </div>
              <div className="col-md-3 about-grid">
                <div className="about-grid-info about-grid-info1 effect-1">
                  <h4>Maldives</h4>
                </div>
              </div>
              <div className="col-md-3 about-grid">
                <div className="about-grid-info about-grid-info2 effect-1">
                  <h4>Ireland</h4>
                </div>
              </div>
              <div className="col-md-3 about-grid">
                <div className="about-grid-info about-grid-info3 effect-1">
                  <h4>New Zealand</h4>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //about */}
        {/* offer */}
        <div className="offer">
          <div className="container">
            <div className="wthree-offer-grid">
              <h4>Today Best offers</h4>
              <p>Sed vitae purus ut libero malesuada molestie imperdiet a nibh. Etiam consectetur odio a massa vulputate porttitor. Quisque nibh orci, vestibulum sed gravida vel, eleifend nec libero. </p>
              <div className="click-button">
              <Link to='/single'>Click Here</Link>
                {/* <a href="single.html">Click Here</a> */}
              </div>
            </div>
          </div>
        </div>
        {/* //offer */}
        {/* news */}
        <div className="news">
          <div className="container">
            <div className="news-heading">
              <h3>News &amp; Events</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta efficitur ante quis volutpat.</p>
            </div>
            <div className="news-grids">
              <div className="col-md-4 news-grid">
                <div className="agile-news-grid-info">
                  <div className="news-grid-info-img">
                    <a href="single.html"><img src="images/n1.jpg" alt="" /></a>
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
                      <a href="single.html">Quisque gravida, nunc eu interdum porta</a>
                      <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 news-grid">
                <div className="agile-news-grid-info">
                  <div className="news-grid-info-img">
                    <a href="single.html"><img src="images/n2.jpg" alt="" /></a>
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
                      <a href="single.html">Quisque gravida, nunc eu interdum porta</a>
                      <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 news-grid">
                <div className="agile-news-grid-info">
                  <div className="news-grid-info-img">
                    <a href="single.html"><img src="images/n3.jpg" alt="" /></a>
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
                      <a href="single.html">Quisque gravida, nunc eu interdum porta</a>
                      <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //news */}
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
                    <li><Link to='/about'>About</Link></li>
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
{/* <div className="banner_w3lspvt" id="home">
	<div className="csslider infinity" id="slider1">
		<input type="radio" name="slides" defaultChecked id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul className="banner_slide_bg">
			<li>
				<div className="slider-info bg1">
					<div className="bs-slider-overlay">
			 			<div className="banner-text">
							<div className="container">
								<h2 className="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								<Link to='/product' className="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div className="slider-info bg2">
					<div className="bs-slider-overlay1">
						<div className="banner-text">
						<div className="container">
								<h2 className="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' className="btn">Start with menu</Link>
							</div>
							</div>
					</div>
				</div>
			</li>
			<li>
				<div className="slider-info bg3">
					<div className="bs-slider-overlay1">
						<div className="banner-text">
							<div className="container">
								<h2 className="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' className="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div className="slider-info bg4">
					<div className="bs-slider-overlay1">
						<div className="banner-text">
							<div className="container">
								<h2 className="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' className="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
						<div className="navigation"> 
							<div>
							  <label htmlFor="slides_1"></label>
							  <label htmlFor="slides_2"></label>
							  <label htmlFor="slides_3"></label>
							  <label htmlFor="slides_4"></label>
							</div>
						</div>
					</div> 
				</div>

 <section className="content-info py-5" id="about">
        <div className="container py-md-5">
		<h3 className="heading text-center mb-3 mb-sm-5">Món Ngon mỗi Ngày</h3>
            <div className="info-w3pvt-mid text-center px-lg-5">

                <div className="title-desc text-center px-lg-5">
					<img src="https://lh3.googleusercontent.com/tYjZqJzN9eLoja7bLgPuiMbNJLcXu9SZf9HFSdmHUXnn4DwP-kYh7-Xzf4AVTopToV2m=h1024-no-tmp_m_n_ngon_m_i_ng_y_d_y_n_u_n_qua_video_apk_poster.jpg" alt="news image" className="img-fluid" />
                    <p className="px-lg-5">Có những ngày nhìn ra bên ngoài cửa sổ, thấy trời mưa chuyển mùa là cả nhà liền thèm ngay món chả chiên nóng giòn, gỏi rau mầm giòn giòn với một tô canh nóng hổi vừa thổi vừa ăn luôn nè!</p>
             		<br/>
             		 <p className="px-lg-5">Đúng theo yêu cầu khẩu vị ngày mưa của Mẹ và cả nhà, thực đơn gợi ý của Món Ngon Mỗi Ngày tối nay sẽ toàn là món ngon đơn giản mà cả nhà thích, vẫn bảo đảm hợp khẩu vị mà nhiều dinh dưỡng nữa nha!</p>
                </div>
            </div>
        </div>
    </section>


     <section className="services py-5" id="services">
        <div className="container py-md-5">
		<h3 className="heading text-center mb-3 mb-sm-5">Món ngon nè!</h3>
            <div className="row ab-info">
                <div className="col-md-6 ab-content ab-content1">
                    <div className="ab-content-inner">
                        <Link to="/product2/9"><img src="https://monngonmoingay.com/wp-content/uploads/2020/11/cua-lot-chien-xot-thai-500.jpg.webp" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Cua lột chiên sốt thái</h4>
							<Link to="/product2/9" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ab-content ab-content1">
                    <div className="ab-content-inner">
					<Link to="/product2/2"><img src="https://monngonmoingay.com/wp-content/uploads/2021/06/sup-thanh-cua-hat-chia-500.jpg.webp" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Súp canh hạt chia</h4>
                            <a href="/product2/2" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ab-info second mt-lg-4">
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/product2/8"><img src="https://monngonmoingay.com/wp-content/uploads/2020/11/goi-bon-mua-500.jpg.webp" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Gỏi bốn mùa</h4>
                            <a href="product2/8" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/product2/7"><img src="https://monngonmoingay.com/wp-content/uploads/2020/12/salad-muc-ong-rong-bien-500.jpg.webp" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Sa lát mực ống rong biển</h4>
                            <a href="/product2/7" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/product2/5"><img src="https://monngonmoingay.com/wp-content/uploads/2021/01/bi-do-hap-hat-sen-500.jpg.webp" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Bí đỏ hấp hạt sen</h4>
                            <a href="/product2/5" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/product2/3"><img src="https://monngonmoingay.com/wp-content/uploads/2015/08/4_CQC0279_BunXaoLongNghe.png" alt="news image" className="img-fluid" /></Link>
                        <div className="ab-info-con">
                            <h4>Bún gạo lòng xào nghệ</h4>
                            <a href="/product2/3" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
<section className="subscribe" id="subscribe">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div className="news-icon mr-3">
					<span className="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div className="text">
					<h3>Món ngon mỗi ngày</h3>
				</div>
			</div>
			<div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Enter your email here" required="" />
					<button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
				<p>Phản hồi</p>
			</div>
		</div>
	</div>
</section> */}
    
    </div>
        )
    
}
export default Home