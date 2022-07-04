import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";

import SectionWrapper from "./trial.style";
import VendorLogos from "common/assets/image/saasClassic/gg-h.png";
import VendorLogos1 from "common/assets/image/saasClassic/marit.png";
import VendorLogos2 from "common/assets/image/saasClassic/jacobco-h.png";
import VendorLogos3 from "common/assets/image/saasClassic/secretlab.png";

const TrialSection = ({
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  return (
    <SectionWrapper className="trial-section" id="sponsor_section">
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Our Sponsors and Partners" />

            <Box className="vender-logos">
              <NextImage src={VendorLogos} alt="GG Poker" />
              <h3 style={{ color: "#e9bc66", fontSize: "18px" }}>
                TITLE SPONSOR
              </h3>
            </Box>
            <Box className="vender-logos">
              <NextImage src={VendorLogos1} alt="Marit Poker" />
              <h3 style={{ color: "#e9bc66", fontSize: "18px" }}>
                OFFICIAL Venue
              </h3>
            </Box>
            <Box className="vender-logos">
              <NextImage src={VendorLogos2} alt="J&Co." />
              <h3 style={{ color: "#e9bc66", fontSize: "18px" }}>
                OFFICIAL TIMEKEEPER
              </h3>
            </Box>
            <Box
              className="vender-logos"
              style={{
                marginBottom: "100px",
              }}
            >
              <NextImage src={VendorLogos3} alt="secretlab" />
            </Box>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.propTypes = {
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "100%", "100%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
    flexBox: true,
    justifyContent: "center",
  },
  title: {
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "18px", "18px", "18px"],
    color: "#fff",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "secondaryWithBg",
    pl: ["15px", "30px"],
    pr: ["15px", "30px"],
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    colors: "secondary",
  },
};

export default TrialSection;
