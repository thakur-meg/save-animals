import React from 'react'
import '../styles/brandnavbar.css'
import { Navbar, Container } from 'react-bootstrap'
import { useState, useEffect } from "react";

const BrandNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <div>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            STA
          </Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  )
}

export default BrandNavbar