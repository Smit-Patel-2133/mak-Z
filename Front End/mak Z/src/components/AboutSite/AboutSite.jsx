import React from 'react';
import './AboutSite.css';
import htmlImage from '../../assets/picture/htmlPhoto.jpeg';
import cssImage from '../../assets/picture/cssPhoto.jpeg';
import demoVideo from '../../assets/Video/demo.mp4';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutSite = () => {
  return (
    <Container fluid>
      <h3 className="about_site">About Site</h3>
      <Row style={{ marginTop: '70px' }}>
        <Col xl={6} md={7} className="about_site_photos" style={{ marginTop: '20px', paddingLeft: '2.5%', paddingRight: '2.5%' }}>
          <Image src={cssImage} alt="about_site_photo_1" className="about_site_photo_1" height="500px" width="200px" style={{ float: 'left', marginTop: '50px' }} />
          <Image src={htmlImage} alt="about_site_photo_2" className="about_site_photo_2" height="600px" width="300px" />
        </Col>
        <Col xl={4} md={5}>
          <p style={{ color: 'rgb(60, 123, 196)', fontSize: '25px' }}><b>Mak-Z</b></p>
          <p>We proudly present "Mak-Z"  an innovative platform tailored to empower coders to craft their unique online presence effortlessly. Much like its renowned counterparts, "Mak-Z" simplifies the web design process, making it accessible to individuals with coding backgrounds. <br /><br />
          "Mak-Z" distinguishes itself by providing an intuitive playground for coders to unleash their creativity. Through an intuitive interface reminiscent of Webflow, users can seamlessly design, customize, and arrange website elements, all while harnessing the power of JavaScript, Node.js, and React.js. This venture comes with a distinct focus – nurturing the creative essence of coders and giving them the tools they need to manifest their digital visions.
          </p>
          <div className="about_site_read_more">
            <a href="#" style={{ textDecoration: 'none' }}><span className="span_1">Read More</span><span className="span_2">{'>'}</span></a>
            <a href="#" className="read_more"><b>{'>'} Read More</b></a>
          </div>
        </Col>
        <Col xl={2} md={0}></Col>
      </Row>
      <Row style={{ marginTop: '70px' }}>
        <Col xl={1} md={0}></Col>
        <Col xl={4} md={5}>
        <p style={{ color: 'rgb(60, 123, 196)', fontSize: '25px' }}><b>Demo Video</b></p>
        <p>As you can see in this video, You can add your elements with the help of drag and drom approch and you can easly download your code as a html file in your folder. You can change the style of your elements as you want. You can take the ready made templates. You cna publish you template. You can also modify your template anytime. With help of our ite you can learn coding or get a free disign platform. You can use amezing design with our site.
        </p>
          <div className="about_site_read_more">
            <a href="#" style={{ textDecoration: 'none' }}><span className="span_1">Start Now</span><span className="span_2">{'>'}</span></a>
            <a href="#" className="read_more"><b>{'>'} Start Now</b></a>
          </div>
        </Col>
        <Col xl={1} md={0}></Col>
        <Col xl={6} md={7}>
            <video controls autoPlay loop width="600" height="400">
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutSite