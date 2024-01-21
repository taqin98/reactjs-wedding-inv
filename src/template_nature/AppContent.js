import React, { Component } from 'react';
import {Container, Button, Card,Row, Col} from 'react-bootstrap';
import '../index.css';
import './main.css';
import Cover from './cover.webp';
import MainImg from './main-image2.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";


const SliderComponent = () => {
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			navigation={true} modules={[Navigation]}
			rewind={true}
			>
			<SwiperSlide>
				{/* <img className="w-100" src="https://cdn-uploads.our-wedding.link/fbbd89d0-e0b4-11eb-beb3-7d632315fafb.jpeg" alt="slider" /> */}
				<img className="w-100" src="./assets/images/gallery/DSCF0882.jpg" alt="slider" />
			</SwiperSlide>
			<SwiperSlide>
				<img className="w-100" src="./assets/images/gallery/DSCF0898.jpg" alt="slider" />
			</SwiperSlide>
			<SwiperSlide>
				<img className="w-100" src="./assets/images/gallery/DSCF0872.jpg" alt="slider" />
			</SwiperSlide>
		</Swiper>
		);

}
export default class AppContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHideCover: true,
			quotes: `Dan Diantara tanda-tanda kebesaran-Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapatkan ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir \n(Surat Ar-Ruum:21)`
		};
		console.log(process.env);
	}
	hideCover = () => {
		this.setState({isHideCover : true})
		// document.getElementsByClassName('cover')[0].hidden = true;
		// document.getElementsByClassName('main-img')[0].hidden = false;
	}
	render(){
		return(
			<React.Fragment>
			<style jsx="true">
			{`
				.couple-profile {
					background-image: url('./assets/images/template_1/flower_mx.png');
					background-size: contain;
					background-repeat: no-repeat;
					background-position: top;
					
				}
				.couple-profile h1 {
					font-size: 7rem;
				}
				.custom-quotes {
					height: 250px;
					position: relative;
					background-image: url('./assets/images/template_1/flower_side.png');
					background-size: cover;
					background-repeat-y: no-repeat;
					background-position: center;
				}
				.bg-primary {
					background: #ecf4ef !important;
				}
				.swiper-button-next, .swiper-button-prev{
					color: white;
				}
				.bg-countdown {
					background-color: #104636;
				}
				.flower-countdown {
					background-color: #104636;
					background-image: url(./assets/images/template_1/bg_countdown.png);
					background-size: cover;
					background-position: center;
				}
				.rundown {
					{/* margin: 2rem 0 2rem 0; */}
					padding-top: 2rem;
					padding-bottom: 1rem;
					background-image: url(./assets/images/template_1/flower2.png);
					{/* background-size: cover; */}
				}
				.object-suket {
					background-image: url(./assets/images/template_1/object-suket.png);
					background-size: contain;
					background-repeat: no-repeat;
					background-position: top;
					height: 21px;
				}
			`}
			</style>
			<Container style={{"width": "100%", "margin":"auto"}}>
				<div className={(this.state.isHideCover === false) ? 'd-block': 'd-none'}>
					<Card className="bg-transparent border-0" style={{"zIndex": 1, "marginTop":"8vh"}}>
						<Card.Title className="title-wedding">THE WEDDING OF</Card.Title>
						<Card.Body className="p-0 row">
							<span className="name-wedding">Ayu & Taqin</span>
							<span className="subtitle-wedding">05 . 02 . 2024</span>
						</Card.Body>
						
						<Card.Body>
							<Button onClick={() => this.hideCover()} className="position-relative mx-auto bg-transparent btn-open mt-5">Buka Undangan</Button>
						</Card.Body>
					</Card>

					<img alt="empty" src={Cover} className="w-100 position-absolute" style={{"left": 0, "top":0, "objectFit":"cover", "height":"100vh"}}/>
				</div>
			</Container>
			<div className={(this.state.isHideCover === false) ? "d-none" : "d-block"}>
				<Card className="bg-transparent border-0" style={{"zIndex": 1}}>
					<div className="shape">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-cover">
							<path fillOpacity="1" d="M 0 192 L 60 208 C 120 224 240 256 360 261.3 C 480 267 600 245 720 202.7 C 840 160 960 96 1080 106.7 C 1200 117 1304 143 1439 227 L 1440 288 L 1440 320 L 1380 320 C 1320 320 1200 320 1080 320 C 960 320 840 320 720 320 C 600 320 480 320 360 320 C 240 320 120 320 60 320 L 0 320 Z" className="shape-fill" data-v-c5783f70=""></path>
							
						</svg>
						<Card.Img variant="top" className={(this.state.isHideCover === false) ? "d-none": "w-100 animate__animated animate__fadeIn"} src={MainImg} style={{"left": 0, "top":0, "objectFit":"cover", "height":"100vh"}} />

					</div>
					<img src="./assets/images/quotes_decor_nature.png" className="w-50 mx-auto" alt="Dekorasi Bunga"/>
					<Card.Body className="text-white quotes padding-balance">
					{this.state.quotes}
					</Card.Body>
					<div className="shape">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-bottom">
							<path fillOpacity="1" d="M 0 192 L 60 208 C 120 224 240 256 360 261.3 C 480 267 600 245 720 202.7 C 840 160 960 96 1080 106.7 C 1200 117 1304 143 1439 227 L 1439 139 L 1439 0 L 1360 0 C 1349 0 1173 0 1066 0 C 958 0 825 0 724 0 C 624 0 507 0 375 0 C 375 1 130 0 116 0 L 0 0 Z" className="shape-fill" data-v-c5783f70=""></path>
						</svg>
					</div>
				</Card>

				<section className=" p-2 pt-4 bg-primary">
					<div style={{"marginTop": "20%"}}>
						<h1 className="font-rosemary_jasmine-title">Calon Pengantin</h1>
					</div>
					<Row>
						<Col xs={12} md={6} className="row mx-auto">
							<div className="box-female position-relative">
								<div className="couple-img">
									<img alt="images" src="./assets/images/template_1/female_pict2.jpeg" className="img-responsive rounded-circle p-3" style={{"width":"198px"}} />
								</div>
								<img alt="images" src="./assets/images/border_couple.png" className="img-responsive position-relative" style={{"width":"198px", "zIndex": 2}} />
							</div>
							<Card className="bg-transparent border-0">
								<Card.Body className="text-black padding-balance text-black">
									<div className="link-instagram font-roboto-black text-black">
										<svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="instagram" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-instagram b-icon bi" data-v-c5783f70=""><g data-v-c5783f70=""><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></g>
										</svg>&nbsp;
										ayu_anzar
									</div>
									<h4 className="font-rosemary text-black fs-8">
										<strong>Ayu Sri Anzar Wati</strong>
									</h4>
									<strong>Putri Keempat Dari</strong>
									<p className="font-roboto-light">Bapak Sholehan & Ibu Siti Asiyah</p>
									
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={12} className="mx-auto">
							<div className="couple-profile">
								<h1 className="font-rosemary">&</h1>
							</div>
						</Col>
						<Col xs={12} md={12} className="mx-auto">
							<div className="box-female position-relative">
								<div className="couple-img">
									<img alt="images" src="./assets/images/template_1/male_pict2.jpeg" className="img-responsive rounded-circle p-3" style={{"width":"198px"}} />
								</div>
								<img alt="images" src="./assets/images/border_couple.png" className="img-responsive position-relative" style={{"width":"198px", "zIndex": 2}} />
							</div>
							<Card className="bg-transparent border-0">
								<Card.Body className="text-black padding-balance text-black">
									<div className="link-instagram font-roboto-black text-black">
										<svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="instagram" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-instagram b-icon bi" data-v-c5783f70=""><g data-v-c5783f70=""><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></g>
										</svg>&nbsp;
										taqin_taqin_
									</div>
									<h4 className="font-rosemary text-black fs-8">
										<strong>Nurul Muttaqin</strong>
									</h4>
									<strong>Putra Kedua Dari</strong>
									<p className="font-roboto-light">Bapak Rukanto & Ibu Suntari</p>
									
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</section>
				<section className=" p-2 pt-0 bg-primary">
					<Row>
						<Col xs={12} md={12} className="">
							<div className="custom-quotes pt-0">
								<h5 className="date-title">
									05 . 02 . 2024
								</h5>
								<p className="mx-auto mt-5">
									"Menciptakan kenangan adalah hadiah yang tak ternilai harganya. 
									Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat."
								</p>
							</div>
						</Col>
					</Row>
				</section>
				<section className=" p-0 bg-primary" style={{"height":"auto"}}>
					<SliderComponent />
				</section>
				<section className="p-0" style={{
					backgroundColor: "#104636"
				}}>
					<div className="group-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-v-2f258c8b=""><path fillOpacity="1" d="M 0 192 L 60 208 C 120 224 240 256 360 261.3 C 480 267 600 245 720 202.7 C 840 160 915 107 1080 106.7 C 1238 109 1270 130 1374 168 L 1439 193 L 1440 320 L 1380 320 C 1320 320 1200 320 1080 320 C 960 320 840 320 720 320 C 600 320 480 320 360 320 C 240 320 120 320 60 320 L 0 320 Z" className="shape-fill-buttom" data-v-2f258c8b=""></path>
						</svg>
						<div className="container bg-countdown flower-countdown" style={{"marginTop": "-0.5rem"}}>
							<Card className="bg-transparent shadow-none border-0 text-white" style={{
								minHeight: 500
							}}>
								<Card.Title className="font-rosemary_jasmine-title mt-4">Acara Akan Diselenggarakan</Card.Title>
								<Row className="mx-auto">
									<Col xs={12} md={12} lg={12} className="mx-auto my-2">
										<div className="object-suket my-4"></div>
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto mt-2">
										<h4 className="font-rosemary_jasmine-title">
											Akad
										</h4>
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Senin, 05 Februari 2024
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Pukul 10.00 WIB - Selesai	
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Desa Jleper 02/03 Kec. Mijen Kab. Demak<br/>
									(Rumah mempelai wanita)
									</Col>
								</Row>

								<Row className="mx-auto">
								<Col xs={12} md={12} lg={12} className="mx-auto my-2">
										<div className="object-suket my-4"></div>
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
										<h4 className="font-rosemary_jasmine-title">
											Pengajian
										</h4>
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Senin, 05 Februari 2024
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Pukul 20.00 WIB - Selesai	
									</Col>
									<Col xs={12} md={12} lg={12} className="mx-auto">
									Desa Jleper 02/03 Kec. Mijen Kab. Demak<br/>
									(Rumah mempelai wanita)
									</Col>
								</Row>
							</Card>
						</div>
						<div className="bg-countdown" style={{
							minHeight: 300,
							marginTop: -10,
						}}>
							<Card className="bg-transparent shadow-none border-0 text-white">
								
								<div className="text-center">
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.61069372334407!2d110.69865010210572!3d-6.7976801891523415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDcnNTEuNSJTIDExMMKwNDEnNTUuNSJF!5e0!3m2!1sid!2sid!4v1705823078923!5m2!1sid!2sid" 
									style={{
										border:0,
										marginTop: 25,
										width: "100%",
										height: "300px",
									}} allowFullScreen loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
								</div>
								<Button className="text-white rounded-5 mt-2 mb-4 mx-5" style={{
									borderColor: "white",
									backgroundColor: "#104636",
								}} onClick={
									() => window.open("https://maps.app.goo.gl/8yaWThWTu2uDPX8H7?g_st=ic", "_blank")
								}>Lihat Lokasi</Button>
							</Card>
						</div>
					</div>
					<div className="shape">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-bottom">
							<path fillOpacity="1" d="M 0 192 L 60 208 C 120 224 240 256 360 261.3 C 480 267 600 245 720 202.7 C 840 160 960 96 1080 106.7 C 1200 117 1304 143 1439 227 L 1439 139 L 1439 0 L 1360 0 C 1349 0 1173 0 1066 0 C 958 0 825 0 724 0 C 624 0 507 0 375 0 C 375 1 130 0 116 0 L 0 0 Z" className="shape-fill-buttom" data-v-c5783f70=""></path>
						</svg>
					</div>
				</section>
				<section className='pt-5 rundown cover' style={{
					backgroundColor: "#ecf4f0",
					minHeight: "500px",
					backgroundPosition: "center",
				}}>
					<Card className="bg-transparent shadow-none border-0 text-black">
						<Card.Title className="font-rosemary_jasmine-title mt-4 pt-4">Tasyakuran</Card.Title>
						<Row className="mx-auto mt-2">
							<Col xs={12} md={12} lg={12} className="mx-auto">
							Ahad, 04 Februari 2024
							</Col>
							<Col xs={12} md={12} lg={12} className="mx-auto">
							Jam Bebas	
							</Col>
							<Col xs={12} md={12} lg={12} className="mx-auto">
							Desa Kuwasen 08/02 <br/>Kec. Jepara Kab. Demak<br/>
							(Rumah mempelai pria)
							</Col>
						</Row>
					</Card>
					<Card className="bg-transparent shadow-none border-0 text-black">
						<div className="object-suket my-4"></div>
						<Card.Title className="font-rosemary_jasmine-title pt-4">Hiburan</Card.Title>
						<Row className="mx-auto">
							<Col xs={12} md={12} lg={12} className="mx-auto">
							Band Akustik
							</Col>
						</Row>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5580909155583!2d110.68729139999999!3d-6.5773177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711f3f9a1fd34d%3A0x3a8e56bd530e1bb!2sSuntari%20Tailor%20Jepara!5e0!3m2!1sid!2sid!4v1705841974221!5m2!1sid!2sid" 
						style={{
							border:0,
							marginTop: 25,
							width: "100%",
							height: "300px",
						}} allowFullScreen loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
						<Button className="text-white rounded-5 mt-2 mb-4 mx-5" style={{
							borderColor: "white",
							backgroundColor: "#104636",
						}} onClick={
							() => window.open("https://maps.app.goo.gl/8yaWThWTu2uDPX8H7?g_st=ic", "_blank")
						}>Lihat Lokasi</Button>
					</Card>
				</section>
			</div>
		</React.Fragment>
		)
	}
}