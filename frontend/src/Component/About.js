import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../Lush.png";
function About() {
    return (
        <div>
            <div className='smain'>
                <img src={logo} height="135" class="img" ></img>

                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/'>Home</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/about'>About</Link></Nav.Link>
                                    <Nav.Link href="#register"><Link class="btn btn-outline-light" aria-current="page" to='/register'>Register</Link></Nav.Link>
                                    <Nav.Link href="#login"><Link class="btn btn-outline-light" aria-current="page" to='/login'>Log In</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </div><br></br><h3>About us</h3><hr></hr>
            {/* <iframe width="560" height="315" style={{ marginLeft: '18%' }} src="https://www.youtube.com/embed/Lxy4fLm-C5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iKm-9I2XVrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <iframe width="560" height="315" style={{ marginLeft: '18%' }} src="https://www.youtube.com/embed/dbPaeoEfFJQ?si=3XoLUIfztbUsgKEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LTXD6XZXc3U?si=Ly-CmH5BEfLa8ett" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br></br><br></br><br></br>

            <h5 style={{ textAlign: 'center' }}>ALL YOU NEED TO KNOW ABOUT US!</h5><hr></hr>
            <div className='content'>
                <section id="about-us" style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
                    <div style={{ maxWidth: '800px', margin: 'auto' }}>

                        <p>
                            At LUSH BLOOMS, we believe that every flower tells a story and every bouquet is a piece of art. Our mission is to bring a touch of elegance and personalization to every occasion with our exquisite range of customized boutique flowers.
                        </p>

                        <h2>Our Story</h2>
                        <p>
                            Founded with a passion for floristry and a commitment to quality, LUSH BLOOMS started as a dream to create a unique floral experience. Our team of expert florists combines creativity with craftsmanship to design stunning floral arrangements that are tailored to your needs. Whether it’s a romantic gesture, a celebratory event, or simply a way to brighten someone’s day, we have the perfect bouquet for every moment.
                        </p>

                        <h2>What We Offer</h2>
                        <ul>
                            <li><strong>Custom Floral Arrangements:</strong> Choose from our wide variety of flowers and design your own bouquet with the help of our skilled florists. Each arrangement is crafted to reflect your personal style and the sentiment you wish to convey.</li>
                            <li><strong>Boutique Flowers:</strong> We source our flowers from trusted growers to ensure that each bloom is fresh, vibrant, and of the highest quality. Our boutique selection includes rare and seasonal flowers that add a special touch to your floral gifts.</li>
                            <li><strong>Personalized Service:</strong> Our dedicated team is here to assist you in creating the perfect floral arrangement. We offer personalized consultations to understand your preferences and ensure that every detail is perfect.</li>
                            <li><strong>Delivery Service:</strong> We offer reliable delivery services to ensure that your floral arrangements arrive fresh and on time. Whether it's a local delivery or a special surprise, we take care of every detail so you can enjoy peace of mind.</li>
                        </ul>

                        <h2>Why Choose Us?</h2>
                        <p>
                            At LUSH BLOOMS, we are committed to providing exceptional service and creating memorable experiences with our flowers. Our attention to detail, passion for floristry, and dedication to customer satisfaction set us apart. We take pride in every arrangement we create and strive to exceed your expectations.
                        </p>

                        <h2>Join Us on Our Floral Journey</h2>
                        <p>
                            Explore our collection and discover the beauty of personalized floral design. Follow us on social media and sign up for our newsletter to stay updated on new arrivals, special offers, and floral inspiration.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            Have questions or need assistance? Reach out to us at <a href="mailto:[email address]">LushBlooms@gmail.com</a> or call us at [phone number]. We’re here to help!
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About