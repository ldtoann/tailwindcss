"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";

const nav = () => {
  return (
    <div>
      <div>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-black">
            <Container>
              <Navbar.Brand href="#" className="text-white">
                <img src="/logo_page.png" className="w-[78px]" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Smate
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link href="/" legacyBehavior>
                      <a className="font-black text-[14px] pt-2.5 pr-5 text-white no-underline">
                        HOME
                      </a>
                    </Link>
                    <Link href="/products" legacyBehavior>
                      <a className="font-black text-[14px] pt-2.5 pr-5 text-white no-underline">
                        PRODUCT
                      </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                      <a className="font-black text-[14px] pt-2.5 pr-5 text-white no-underline">
                        GALLERY
                      </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                      <a className="font-black text-[14px] pt-2.5 pr-5 text-white no-underline">
                        ABOUTS
                      </a>
                    </Link>
                    <Link href="/create" legacyBehavior>
                      <a className="font-black text-[14px] pt-2.5 pr-5 text-white no-underline">
                        VIEW ORDER
                      </a>
                    </Link>
                    {/* <NavDropdown
                      title="CONTACT"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="font-black text-[15px] pt-2 text-white pr-5 no-underline"
                    >
                      <NavDropdown.Item href="https://www.facebook.com/toan.lee.7796420/">
                        FACEBOOK PAGE
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        INSTAGRAM PAGE
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link href="/" legacyBehavior>
                          <a className="font-black text-[15px] pt-2 pr-5 no-underline">
                            SUPPORT
                          </a>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  );
};

export default nav;
