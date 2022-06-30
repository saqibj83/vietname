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
import VendorLogos1 from "common/assets/image/saasClassic/m88-h.png";
import VendorLogos2 from "common/assets/image/saasClassic/jacobco-h.png";
import VendorLogos3 from "common/assets/image/saasClassic/luxon-pay-h.png";

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

            <Box style={{ width: "33%", float: "left", textAlign: "center" }}>
              <NextImage src={VendorLogos} alt="Domain Image" />
              <h3 style={{ color: "#e29821" }}>TITLE SPONSOR</h3>
            </Box>
            <Box style={{ width: "33%", float: "left", textAlign: "center" }}>
              <NextImage src={VendorLogos1} alt="Domain Image" />
              <h3 style={{ color: "#e29821" }}>OFFICAL BETTING PARTNER</h3>
            </Box>
            <Box
              style={{
                width: "33%",
                float: "left",
                textAlign: "center",
                marginBottom: "100px",
              }}
            >
              <NextImage src={VendorLogos2} alt="Domain Image" />
              <h3 style={{ color: "#e29821" }}>OFFICIAL TIMEKEEPER</h3>
            </Box>
            <Heading
              {...title}
              content="WANT TO JOIN THE ACTION?
"
            />
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
    fontSize: ["28px", "32px", "36px", "42px", "48px"],
    fontWeight: "500",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "16px", "16px", "16px"],
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
