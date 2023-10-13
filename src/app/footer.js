"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Styledfooter = styled.div`
  #footer {
    background-color: black;
  }
  #allmxh {
    display: flex;
    margin-top: 30px;
    justify-content: end;
  }
  #imgfooter img {
    width: 100%;
    height: auto;
    margin-left: -45px;
  }
  #mxh {
    margin-left: 10px;
    background-color: white;
    height: 37px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid black;
  }
  #mxh:hover {
    background-color: rgb(145, 7, 7);
    color: white;
    transition: 0.5s;
  }
  #mxh img {
    margin-top: 8px;
    margin-left: 8px;
    width: 20px;
    height: 20px;
  }
  #aboutfooter_col_left {
    margin-top: 30px;
  }
  #title_footer {
    text-decoration: none;
    color: white;
    font-weight: 800;
    line-height: 45px;
    font-size: 16px;
  }
  #info_footer {
    text-decoration: none;
    color: gray;
    line-height: 40px;
    font-size: 13px;
  }
  #title_footer:hover,
  #info_footer:hover {
    color: rgb(145, 7, 7);
    transition: 0.5s;
  }
  #content_footer_left {
    margin: 20px 0px;
    display: flex;
  }
  #content_footer_left a {
    text-decoration: none;
    color: white;
    font-size: 13px;
    /* margin-right: 15px; */
  }
  #content_footer_left a img {
    color: gray;
    width: 25px;
  }
  #content_footer_right a {
    font-size: 13px;
    color: gray;
    text-decoration: none;
    margin-left: 20px;
  }
  #content_footer_right a:hover {
    color: rgb(145, 7, 7);
    transition: 0.5s;
  }
  #content_footer_right {
    text-align: end;
    margin: 20px 0px;
  }
`;
const Footer = () => {
  return (
    <div>
      <Styledfooter>
        <div id="footer">
          <Container id="aboutfooter">
            <Row>
              <Col id="aboutfooter_col_left" lg={9}>
                <Row>
                  <Col id="aboutfooter_start" lg={3}>
                    <a id="title_footer" href="">
                      FIND A STORE
                    </a>
                    <br />
                    <a id="title_footer" href="">
                      BECOME A MEMBER
                    </a>
                    <br />
                    <a id="title_footer" href="">
                      SIGN UP FOR EMAIL
                    </a>
                    <br />
                    <a id="title_footer" href="">
                      SEND US FEEDBACK
                    </a>
                  </Col>
                  <Col id="aboutfooter_between" lg={2}>
                    <a id="title_footer" href="">
                      GET HELP
                    </a>
                    <br />
                    <a id="info_footer" href="">
                      Order Status
                    </a>
                    <br />
                    <a id="info_footer" href="">
                      Delivery
                    </a>
                    <br />
                    <a id="info_footer" href="">
                      Returns
                    </a>
                    <br />
                    <a id="info_footer" href="">
                      Payment Options
                    </a>
                    <br />
                    <a id="info_footer" href="">
                      Contact Us
                    </a>
                  </Col>
                  <Col id="aboutfooter_end" lg={6}>
                    <iframe
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7652.648537092414!2d107.57930777736833!3d16.459110249176753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a149e5fbd6b5%3A0x7abcc9ee8c4f5c5f!2zMDYgTMOqIEzhu6NpLCBzdHJlZXQsIFRow6BuaCBwaOG7kSBIdeG6vywgVGjhu6thIFRoacOqbiBIdeG6vyA1MzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1668766222765!5m2!1svi!2s"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Col>
                  <Col lg={1}></Col>
                </Row>
              </Col>
              <Col id="aboutfooter_col_right" lg={3}>
                <div id="allmxh">
                  <div id="mxh" class="text-center">
                    <a href="">
                      <img src="/facebook.svg" />
                    </a>
                  </div>
                  <div id="mxh" class="text-center">
                    <a href="">
                      <img src="/instagram.svg" />
                    </a>
                  </div>
                  <div id="mxh" class="text-center">
                    <a href="">
                      <img src="/twitter.svg" />
                    </a>
                  </div>
                  <div id="mxh" class="text-center">
                    <a href="">
                      <img src="/twitch.svg" />
                    </a>
                  </div>
                </div>
                <div id="imgfooter">
                  <img src="/logo_page.png" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col id="content_footer_left">
                <a>
                  <img src="/location.svg" />
                </a>
                <a className="mr-3 mt-1">VietNam</a>
                <a className="mt-1">
                  CopyRight © 2023 SMATE, Inc. All Rights Reserved
                </a>
              </Col>
              <Col id="content_footer_right">
                <a href="">Guides</a>
                <a href="">Terms of Sale</a>
                <a href="">Terms of Use</a>
                <a href="">Smate Privacy Policy</a>
              </Col>
            </Row>
          </Container>
        </div>
      </Styledfooter>
    </div>
  );
};

export default Footer;
