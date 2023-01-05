import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import Button from "common/components/Button";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="venue">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content="Event Venue and Travel Information"
          />
        </Box>
        <Tabs className="update-screen-tab">
          <TabPane tab="Venue" key="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15353.865768306523!2d108.4063551!3d15.8320635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa168e08de8f735e8!2sHoiana%20Hotel%20%26%20Suites!5e0!3m2!1sen!2s!4v1672891162265!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </TabPane>
          {/* <TabPane tab="Accommodation" key="2">
            <ul>
              <li>Arrival: 4th of September 2022</li>
              <li>Departure: 20th of September 2022</li>
              <li>
                During Triton Series CYPRUS complimentary accommodation is
                offered to players who will qualify for the USD 250K combined
                spend in tournament buy-ins. We are pleased to offer
                complimentary accommodation at:
              </li>
              <li>Merit Royal Diamond Hotel</li>
              <li>Please advise at your earliest convenience.</li>
              <li>The number of rooms available is limited.</li>
              <li>
                <Link href="https://triton-series.com/accommodation-terms-conditions/">
                  <a>Click here for accommodation terms and conditions</a>
                </Link>
              </li>
            </ul>
          </TabPane> */}
          <TabPane tab="Travel Information" key="3">
            <h2>Entering Vietnam</h2>
            <h3>Arrival & Transfers</h3>
            <p>Travel Information XXXXxxxx</p>
          </TabPane>
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "100%",
    maxWidth: "100%",
  },
};

export default UpdateScreen;
