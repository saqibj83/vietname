import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Input from "common/components/Input";

import facebook from "common/assets/image/saasClassic/facebook.png";
import twitter from "common/assets/image/saasClassic/twitter.png";
import instagram from "common/assets/image/saasClassic/instagram.png";
import youtube from "common/assets/image/saasClassic/youtube.png";
import twitch from "common/assets/image/saasClassic/twitch.png";
import { FOOTER_WIDGET } from "common/data/SaasClassic";

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  buttonStyle,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <div className="footer-top">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2">
              <div className="footer-top__social">
                <span className="footer-nav__col-title">SITEMAP</span>
                <ul>
                  <li>
                    <Link href="#banner_section">
                      <a>
                        <i className="icon-arrow-sm"></i>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#event_section">
                      <a>
                        <i className="icon-arrow-sm"></i>
                        Event Shedule
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#channel_section">
                      <a>
                        <i className="icon-arrow-sm"></i>Live Channel
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#venue">
                      <a>
                        <i className="icon-arrow-sm"></i>Venue
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#sponsor_section">
                      <a>
                        <i className="icon-arrow-sm"></i>Sponsors
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#join_section">
                      <a>
                        <i className="icon-arrow-sm"></i>Join
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="footer-nav_subscribe mt-8">
                  <span className="footer-nav__col-title">Newsletter</span>

                  <div className="box-field__row">
                    <div className="box-field">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: "#e9bc66" }}
                    >
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-nav_cotact mt-8">
                <span className="footer-nav__col-title">Contact</span>
                <p
                  style={{
                    fontSize: "16px",
                    float: "left",
                  }}
                >
                  <i className="icon-map-pin"></i> 85, Fenlex House, St. John
                  Street, Valleta, VLT1165, Malta
                </p>
                <ul>
                  <li>
                    <i className="icon-mail"></i>
                    <a target="_blank" href="mailto:info@triton-series.com">
                      info@triton-series.com{" "}
                    </a>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <a target="_blank" href="mailto:register@triton-series.com">
                      register@triton-series.com
                    </a>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <a
                      target="_blank"
                      href="mailto:partnerships@triton-series.com"
                    >
                      partnerships@triton-series.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
              <ul className="social">
                <Link href="https://facebook.com/tritonpoker">
                  <a target="_blank">
                    <li className="facebook"></li>
                  </a>
                </Link>
                <Link href="https://twitter.com/tritonpoker">
                  <a target="_blank">
                    <li className="twitter"></li>
                  </a>
                </Link>
                <Link href="https://instagram.com/tritonpokerseries">
                  <a target="_blank">
                    <li className="instagram"></li>
                  </a>
                </Link>
                <Link href="https://www.twitch.tv/tritonpoker">
                  <a target="_blank">
                    <li className="twitch"></li>
                  </a>
                </Link>
                <Link href="https://youtube.com/tritonpoker">
                  <a target="_blank">
                    <li className="youtube"></li>
                  </a>
                </Link>
                <Link href="https://discord.gg/tritonpoker">
                  <a target="_blank">
                    <li className="discord"></li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <span>&copy; All rights reserved. Triton Series 2023</span>

          <div>
            <Link href="https://triton-series.com/privacy-policy/">
              <a target="_blank" className="linkFooter">
                Privacy Policy
              </a>
            </Link>
            <Link href="https://triton-series.com/terms-and-conditions/">
              <a target="_blank" className="linkFooter">
                Terms and Conditions
              </a>
            </Link>
            <Link href="https://triton-series.com/about-paul-phua">
              <a target="_blank" className="linkFooter">
                About Paul Phua
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "40%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "60%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#fff",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
