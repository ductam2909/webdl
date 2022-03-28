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
                      <li><a href="#">Services</a></li>
                      {/* <li><a href="codes.html">Codes</a></li>	 */}
					           <li><Link to='/gallery'>Gallery</Link></li>
                      <li><a href="#">Contact</a></li>
                      <li><Link to='/login'>Login</Link></li>
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
      <p>Trang tin tổng hợp và giới thiệu những điểm đến du lịch Đà Nẵng, món ăn ngon, khách sạn đẹp, dịch vụ du lịch, ẩm thực, ăn ở đâu, ngủ ở đâu, chơi ở đâu khi đi du lịch Đà Nẵng…</p>
    </div>
    <div className="agileits-a-about-grids">
      <div className="col-md-5 agileits-a-about-left">
        <img src="https://webdulichdanang.com/wp-content/uploads/2021/07/cau-tran-thi-ly.jpeg" alt="" />
      </div>
      <div className="col-md-7 agileits-a-about-right">
        <h3>Đà Nẵng – Thành phố biển đáng sống nhất</h3>
        <h4>Đà Nẵng không chỉ nổi tiếng những địa điểm du lịch nổi tiếng như: Bà Nà Hills, các bãi biển đẹp, những dịch vụ du lịch đẳng cấp mà còn nổi tiếng bởi những cây cầu là biểu tượng đặc trưng, mang nét quyến rũ khi bắt ngang sông Hàn. Hãy cùng Web Du Lịch Đà Nẵng điểm qua những cây cầu nổi tiếng của Đà Nẵng. </h4>
        <p>Là thành phố lớn nhất miền Trung, Đà Nẵng khoác lên mình sự nhộn nhịp và huyên náo của một trung tâm kinh tế - văn hóa lớn nhất khu vực. Được bao bọc bởi biển cả xanh ngát và núi non hùng vĩ, đây là thành phố đáng sống với nhiều thắng cảnh làm say lòng người cùng những giá trị văn hóa độc đáo. Con người Đà Nẵng bình dị, mến khách đã trở thành biểu tượng của mảnh đất này. </p>
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
      <h3>Tổng Quan Đà Nẵng</h3>
      <p>Đà Nẵng là thành phố lớn thứ 4 ở Việt Nam sau Thành phố Hồ Chí Minh, Hà Nội và Hải Phòng về đô thị hóa và phát triển kinh tế – xã hội. Nằm trên bờ Biển Đông có cửa sông Hàn, Đà Nẵng là một trong những thành phố cảng có vị trí chiến lược của miền Trung Việt Nam và là một trong 5 thành phố trực thuộc Trung ương.</p>
    </div>
    <div className="w3agile-different-info">
      <p>Thành phố Đà Nẵng nằm ở miền Trung Việt Nam với khoảng cách gần như chia đều giữa thủ đô Hà Nội và thành phố Hồ Chí Minh. Đà Nẵng còn là trung tâm của 3 di sản văn hóa thế giới là Cố đô Huế, phố cổ Hội An và thánh địa Mỹ Sơn. Bắc giáp tỉnh Thừa Thiên – Huế, Tây và Nam giáp tỉnh Quảng Nam, Đông giáp Biển Đông. Đà Nẵng nằm ở trung độ đất nước, trên trục giao thông Bắc – Nam về đường bộ, đường sắt, đường biển, đường hàng không và điểm cuối của Hành lang Kinh tế Đông Tây trải dài từ Việt Nam, Lào, Thái Lan và Burma (Myanmar)</p>
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
      <p>Dự án trang tin tức Đà Nẵng được xây dựng và phát triển bởi đội ngũ gồm 5 thành viên</p>
    </div>
    <div className="team-grids">
      <div className="col-md-33 agileinfo-team-grid">
        <img src="https://i.pinimg.com/736x/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg" alt="" />
        <div className="captn">
          <h4>Đức Tâm</h4>
          <p>skyteam </p>
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFFSoVn5hGCJwT9RhooklzWW2jwmDQVUQstcSQbfT7Anx9uUcYFHmA5cBetxVPBjZpRw&usqp=CAU" alt="" />
        <div className="captn">
          <h4>Ngọc Bảo</h4>
          <p>skyteam </p>
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7DRA21ej4BHehS4O_zLXpAXbppI7aJRdhiGwNGSFEBlEMbwfdpGFMKfp4i_LDBx9-DM&usqp=CAU" alt="" />
        <div className="captn">
          <h4>Thu diệu</h4>
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFFSoVn5hGCJwT9RhooklzWW2jwmDQVUQstcSQbfT7Anx9uUcYFHmA5cBetxVPBjZpRw&usqp=CAU" alt="" />
        <div className="captn">
          <h4>Thanh Huy</h4>
          <p>Skyteam</p>
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFFSoVn5hGCJwT9RhooklzWW2jwmDQVUQstcSQbfT7Anx9uUcYFHmA5cBetxVPBjZpRw&usqp=CAU" alt="" />
        <div className="captn">
          <h4>Thành Thông</h4>
          <p>Skyteam</p>
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