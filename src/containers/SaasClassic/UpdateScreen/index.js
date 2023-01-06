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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.132127864239!2d108.40098532402492!3d15.826818806124203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420ca2682773c9%3A0x99d45d26e71fe07d!2sHoiana%20Resort%20%26%20Golf!5e0!3m2!1sen!2s!4v1672992455354!5m2!1sen!2s"
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
            <p>
              Nearest Airport: Da Nang International Airport (60 minutes drive)
            </p>
            <p>
              {" "}
              We are pleased to offer airport transfers with preferential rates.
              Please get in touch with our VIP services for information on rates
              and booking.
            </p>
            <h3>Entering Vietnam and Visa Requirements</h3>
            <p>
              Please note that it is compulsory for certain countries' passport
              holders to apply for an online e-visa (single-entry electronic
              tourist visa), which is valid for a maximum of 30 days. The
              application fee is USD 25 and 3 working days to proceed. A code
              will be sent to your email and you need to print out the visa.{" "}
            </p>
            <p>
              Visitors from some countries may enter visa -free and stay for the
              indicated number of days. Passport holders from Europe, Korea and
              Japan entering Vietnam will be Visa-free for less than 15 days, we
              will apply the e-visa extension upon confirmation of your flight
              date. Note that the maximum is 30 days for e-visa.
            </p>
            <p>
              Purchase medical/travel insurance that covers COVID-19 treatment
              with a minimum coverage: $10,000. This typically costs about USD
              40.
            </p>
            <p>
              You may check more details about visa-requirement to Vietnam from
              this link below.
              <Link href="https://vietnam.travel/plan-your-trip/visa-requirements">
                <a target="_blank">
                  https://vietnam.travel/plan-your-trip/visa-requirements
                </a>
              </Link>
            </p>
            <p>
              Players can choose to apply the e-visa on their own or seek for
              the services from VIP Services. We are happy to provide assistance
              on e-visa applications through the venue with the following rates:
            </p>
            <img
              src="https://cdn.triton-series.com/wp-content/uploads/2023/01/06134608/main-table-2.png"
              alt=""
            />
          </TabPane>
        </Tabs>
        <Box style={{ textAlign: "center", paddingTop: "15px" }}>
          <Link href="https://triton-series.com/vietnam-accommodation/">
            <a target="_blank" style={{ color: "#eba800" }}>
              Click here for accommodation terms and conditions
            </a>
          </Link>
        </Box>
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
