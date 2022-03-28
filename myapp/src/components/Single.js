import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import NewIteam2 from "./Product/NewIteam2";
import { CommentPages } from "./components/Comments";
function Single() {
	const params = new URLSearchParams(window.location.search); // id=123
	const id = params.get("id");

	const mount = useRef(true);

	const [item, setItem] = useState({});

	useEffect(() => {
		mount.current = true;
		if (id) {
			fetch("http://localhost:3333/lists")
				.then(res => res.json())
				.then(res => res.find(item => item.id === +id))
				.then(item => {
					if (mount.current) setItem(item);
				});
			return () => (mount.current = false);
		}
	}, []);

	useEffect(() => {
		mount.current = true;
		if (id) {
			fetch("http://localhost:3333/lists")
				.then(res => res.json())
				.then(res => res.find(item => item.id === +id))
				.then(item => {
					if (mount.current) setItem(item);
				});
			return () => (mount.current = false);
		}
	}, []);

	const [lists, setlists] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3333/lists")
			.then(res => res.json())
			.then(res => setlists(res));
	}, []);
	console.log(lists);
	const iteams = lists.map(test => {
		return <NewIteam2 key={test.id} id={test.id} tieude={test.tieuDe} />;
	});

	return (
		<div>
			{/* banner */}
			<div className="banner about-bg">
				<div className="top-banner about-top-banner">
					<div className="container">
						<div className="top-banner-left">
							<ul>
								<li>
									<i
										className="fa fa-phone"
										aria-hidden="true"
									/>{" "}
									+1 234 567 8901
								</li>
								<li>
									<a href="mailto:example@email.com">
										<i
											className="fa fa-envelope"
											aria-hidden="true"
										/>{" "}
										mail@example.com
									</a>
								</li>
							</ul>
						</div>
						<div className="top-banner-right">
							<ul>
								<li>
									<a className="facebook" href="#">
										<i
											className="fa fa-facebook"
											aria-hidden="true"
										/>
									</a>
								</li>
								<li>
									<a className="facebook" href="#">
										<i
											className="fa fa-twitter"
											aria-hidden="true"
										/>
									</a>
								</li>
								<li>
									<a className="facebook" href="#">
										<i
											className="fa fa-dribbble"
											aria-hidden="true"
										/>
									</a>
								</li>
								<li>
									<a className="facebook" href="#">
										<i
											className="fa fa-google-plus"
											aria-hidden="true"
										/>
									</a>
								</li>
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
								<button
									type="button"
									className="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1">
									Menu
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
			{/* blog */}
			<div className="blog">
				{/* container */}
				<div className="container">
					<div className="col-md-8 blog-top-left-grid">
						<div className="left-blog left-single">
							<div className="blog-left">
								<div className="single-left-left">
									<p>
										Posted By <a href="#">Admin</a>{" "}
										&nbsp;&nbsp; on June 2, 2016
										&nbsp;&nbsp;{" "}
										<a href="#">Comments (10)</a>
									</p>
									<img src={item?.anh1} alt={item?.tieude} />
								</div>
								<div className="blog-left-bottom">
									<h4>{item?.tieuDe}</h4>
									<p> {item?.noiDung}</p>
								</div>
								<div className="blog-left-bottom left-bottom">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.Sed blandit massa vel
										mauris sollicitudin dignissim. Phasellus
										ultrices tellus eget ipsum ornare
										molestie scelerisque eros dignissim.
										Phasellus fringilla hendrerit lectus nec
										vehicula. ultrices tellus eget ipsum
										ornare consectetur adipiscing elit.Sed
										blandit .
									</p>
								</div>
								<div className="blog-left-bottom left-bottom">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.Sed blandit massa vel
										mauris sollicitudin dignissim. Phasellus
										ultrices tellus eget ipsum ornare
										molestie scelerisque eros dignissim.
										Phasellus fringilla hendrerit lectus nec
										vehicula. ultrices tellus eget ipsum
										ornare consectetur adipiscing elit.Sed
										blandit .
									</p>
								</div>
							</div>
							<div className="response">
								<h3>Responses</h3>
								<CommentPages
									name="detail"
									id="1"
									user="Nguyễn Thanh Huy"
									idUser="1"
								/>
							</div>
							<div className="opinion">
								<h2>Leave Your Comment</h2>
								<form action="#" method="post">
									<input
										type="text"
										name="Name"
										placeholder="Name"
										required
									/>
									<input
										type="text"
										name="Email"
										placeholder="Email"
										required
									/>
									<textarea
										name="Message"
										placeholder="Message"
										required
										defaultValue={""}
									/>
									<input type="submit" defaultValue="SEND" />
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-4 blog-top-right-grid">
						<div className="categories">
							<h3>Categories</h3>
							<ul>{iteams}</ul>
						</div>
						<div className="categories">
							<h3>Archive</h3>
							<ul className="marked-list offs1">
								<li>
									<a href="#">May 2016 (7)</a>
								</li>
								<li>
									<a href="#">April 2016 (11)</a>
								</li>
								<li>
									<a href="#">March 2016 (12)</a>
								</li>
								<li>
									<a href="#">February 2016 (14)</a>{" "}
								</li>
								<li>
									<a href="#">January 2016 (10)</a>
								</li>
								<li>
									<a href="#">December 2016 (12)</a>
								</li>
								<li>
									<a href="#">November 2016 (8)</a>
								</li>
								<li>
									<a href="#">October 2016 (7)</a>{" "}
								</li>
								<li>
									<a href="#">September 2016 (8)</a>
								</li>
								<li>
									<a href="#">August 2016 (6)</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="clearfix"> </div>
				</div>
				{/* //container */}
			</div>
			{/* //blog */}
			{/* footer */}
			<div className="footer">
				<div className="container">
					<div className="footer-grids">
						<div className="col-md-3 footer-grid">
							<div className="footer-grid-heading">
								<h4>Address</h4>
							</div>
							<div className="footer-grid-info">
								<p>
									Eiusmod Tempor inc
									<span>
										St Dolore Place,Kingsport 56777.
									</span>
								</p>
								<p className="phone">
									Phone : +1 123 456 789
									<span>
										Email :{" "}
										<a href="mailto:example@email.com">
											mail@example.com
										</a>
									</span>
								</p>
							</div>
						</div>
						<div className="col-md-3 footer-grid">
							<div className="footer-grid-heading">
								<h4>Navigation</h4>
							</div>
							<div className="footer-grid-info">
								<ul>
									<li>
										<a href="about.html">About</a>
									</li>
									<li>
										<a href="services.html">Services</a>
									</li>
									<li>
										<a href="gallery.html">Gallery</a>
									</li>
									<li>
										<a href="contact.html">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 footer-grid">
							<div className="footer-grid-heading">
								<h4>Follow</h4>
							</div>
							<div className="social">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-facebook" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-rss" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-vk" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 footer-grid">
							<div className="footer-grid-heading">
								<h4>Newsletter</h4>
							</div>
							<div className="footer-grid-info">
								<form action="#" method="post">
									<input
										type="email"
										id="mc4wp_email"
										name="EMAIL"
										placeholder="Enter your email here"
										required
									/>
									<input
										type="submit"
										defaultValue="Subscribe"
									/>
								</form>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="copyright">
						<p>
							© 2016 My Trip . All Rights Reserved | Design by{" "}
							<a href="http://w3layouts.com/"> W3layouts</a>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Single;
