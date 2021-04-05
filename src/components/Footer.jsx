import React from "react";
import { Nav, NavItem, NavLink, Col, Row } from 'reactstrap';
import logo from './swimlogo.webp'
// 000080
const Footer = () => {
  return (
    <div style={{ backgroundColor: '#000080' }} className="text-white mt-5">
      <Row>
        <Col xs="3" className="text-center">
          <ul style={{ listStyleType: 'none' }}>
            <li className=" py-2">
              <img src={logo} alt="" width="25%" />
            </li>
            <li className=" py-1">
              <NavLink to="/careers" title="Go To Career Page" className="text-white ">
                Social media links
                </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs="3" className="text-center">
          <h4 className=" py-1">Company</h4>
          <ul style={{ listStyleType: 'none' }}>
            <li className=" py-2">
              <NavLink to="/about" title="Go To About Page" className="text-white">
                About Us
                </NavLink>
            </li>
            <li className=" py-1">
              <NavLink to="/contact" title="Go To Contact Us" className="text-white">
                Contact us
                </NavLink>
            </li>
            <li className=" py-1">
              <NavLink to="/contact" title="Go To Contact Us" className="text-white">
                Affiliate
                </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs="3" className="text-center">
          <h4 className="py-1">Legal</h4>

          <ul style={{ listStyleType: 'none' }}>
            <li className=" py-2">
              <NavLink to="/terms" title="Go To Terms and Condition" className="text-white">
                Terms & Conditions
                </NavLink>
            </li>
            <li className=" py-1 ">
              {/* <a href="/terms/#9">Privacy Policy</a> */}
              <NavLink to="/terms/#9" title="Go To Privacy Policy" className="text-white">
                Privacy Policy
                </NavLink>
            </li>
            <li className=" py-1">
              {/* <a href="/terms#12">Anti-Money Laundering</a> */}
              <NavLink to="/terms/#12" title="Go To Anti-Money Laundering" className="text-white">
                Anti-Money Laundering
                </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs="3" className="text-center">
          <h4 className="py-1">Resources</h4>

          <ul style={{ listStyleType: 'none' }}>
            <li className=" py-2">
              <NavLink to="/blog" title="Go To Blog" className="text-white">
                Blog
                </NavLink>
            </li>
            <li className=" py-1">
              <NavLink to="/faq" title="Go To Frequently Asked Questions" className="text-white">
                FAQs
                </NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
