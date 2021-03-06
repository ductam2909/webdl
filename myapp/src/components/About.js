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
      <p>Trang tin t???ng h???p v?? gi???i thi???u nh???ng ??i???m ?????n du l???ch ???? N???ng, m??n ??n ngon, kh??ch s???n ?????p, d???ch v??? du l???ch, ???m th???c, ??n ??? ????u, ng??? ??? ????u, ch??i ??? ????u khi ??i du l???ch ???? N???ng???</p>
    </div>
    <div className="agileits-a-about-grids">
      <div className="col-md-5 agileits-a-about-left">
        <img src="https://webdulichdanang.com/wp-content/uploads/2021/07/cau-tran-thi-ly.jpeg" alt="" />
      </div>
      <div className="col-md-7 agileits-a-about-right">
        <h3>???? N???ng ??? Th??nh ph??? bi???n ????ng s???ng nh???t</h3>
        <h4>???? N???ng kh??ng ch??? n???i ti???ng nh???ng ?????a ??i???m du l???ch n???i ti???ng nh??: B?? N?? Hills, c??c b??i bi???n ?????p, nh???ng d???ch v??? du l???ch ?????ng c???p m?? c??n n???i ti???ng b???i nh???ng c??y c???u l?? bi???u t?????ng ?????c tr??ng, mang n??t quy???n r?? khi b???t ngang s??ng H??n. H??y c??ng Web Du L???ch ???? N???ng ??i???m qua nh???ng c??y c???u n???i ti???ng c???a ???? N???ng. </h4>
        <p>L?? th??nh ph??? l???n nh???t mi???n Trung, ???? N???ng kho??c l??n m??nh s??? nh???n nh???p v?? huy??n n??o c???a m???t trung t??m kinh t??? - v??n h??a l???n nh???t khu v???c. ???????c bao b???c b???i bi???n c??? xanh ng??t v?? n??i non h??ng v??, ????y l?? th??nh ph??? ????ng s???ng v???i nhi???u th???ng c???nh l??m say l??ng ng?????i c??ng nh???ng gi?? tr??? v??n h??a ?????c ????o. Con ng?????i ???? N???ng b??nh d???, m???n kh??ch ???? tr??? th??nh bi???u t?????ng c???a m???nh ?????t n??y. </p>
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
      <h3>T???ng Quan ???? N???ng</h3>
      <p>???? N???ng l?? th??nh ph??? l???n th??? 4 ??? Vi???t Nam sau Th??nh ph??? H??? Ch?? Minh, H?? N???i v?? H???i Ph??ng v??? ???? th??? h??a v?? ph??t tri???n kinh t??? ??? x?? h???i. N???m tr??n b??? Bi???n ????ng c?? c???a s??ng H??n, ???? N???ng l?? m???t trong nh???ng th??nh ph??? c???ng c?? v??? tr?? chi???n l?????c c???a mi???n Trung Vi???t Nam v?? l?? m???t trong 5 th??nh ph??? tr???c thu???c Trung ????ng.</p>
    </div>
    <div className="w3agile-different-info">
      <p>Th??nh ph??? ???? N???ng n???m ??? mi???n Trung Vi???t Nam v???i kho???ng c??ch g???n nh?? chia ?????u gi???a th??? ???? H?? N???i v?? th??nh ph??? H??? Ch?? Minh. ???? N???ng c??n l?? trung t??m c???a 3 di s???n v??n h??a th??? gi???i l?? C??? ???? Hu???, ph??? c??? H???i An v?? th??nh ?????a M??? S??n. B???c gi??p t???nh Th???a Thi??n ??? Hu???, T??y v?? Nam gi??p t???nh Qu???ng Nam, ????ng gi??p Bi???n ????ng. ???? N???ng n???m ??? trung ????? ?????t n?????c, tr??n tr???c giao th??ng B???c ??? Nam v??? ???????ng b???, ???????ng s???t, ???????ng bi???n, ???????ng h??ng kh??ng v?? ??i???m cu???i c???a H??nh lang Kinh t??? ????ng T??y tr???i d??i t??? Vi???t Nam, L??o, Th??i Lan v?? Burma (Myanmar)</p>
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
      <p>D??? ??n trang tin t???c ???? N???ng ???????c x??y d???ng v?? ph??t tri???n b???i ?????i ng?? g???m 5 th??nh vi??n</p>
    </div>
    <div className="team-grids">
      <div className="col-md-33 agileinfo-team-grid">
        <img src="https://i.pinimg.com/736x/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg" alt="" />
        <div className="captn">
          <h4>?????c T??m</h4>
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
          <h4>Ng???c B???o</h4>
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
          <h4>Thu di???u</h4>
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
          <h4>Th??nh Th??ng</h4>
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
      <p>?? 2016 My Trip . All Rights Reserved | Design by <a href="http://w3layouts.com/"> W3layouts</a> </p>
    </div>
  </div>
</div>
</div>
	
        )
    }
}
export default About