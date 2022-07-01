import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Input from "common/components/Input";
import Select from "common/components/Select";
import Container from "common/components/UI/Container";
import "react-datepicker/dist/react-datepicker.css";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";
import { DOMAIN_NAMES } from "common/data/Hosting/data";

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <ContactFormWrapper>
              <Container>
                <Input
                  inputType="text"
                  label="NAME"
                  iconPosition="right"
                  isMaterial={true}
                  className="email_input"
                />
                <Input
                  inputType="text"
                  label="AGE"
                  iconPosition="right"
                  isMaterial={true}
                  className="email_input"
                />

                <textarea
                  name="textarea-804"
                  cols="40"
                  rows="5"
                  class="email_input"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #514f50",
                  }}
                ></textarea>
              </Container>
            </ContactFormWrapper>
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Container>
                <Input
                  inputType="email"
                  label="EMAIL"
                  iconPosition="right"
                  isMaterial={true}
                  className="email_input emil"
                />
                <Select
                  options={DOMAIN_NAMES}
                  placeholder="Event To Join"
                  className="domain_search_select"
                  aria-label="select options"
                />
                <Input
                  inputType="text"
                  label="REFERRAL"
                  iconPosition="right"
                  isMaterial={true}
                  className="email_input"
                  style={{ marginTop: "40px" }}
                />
                <Box>
                  {" "}
                  <label htmlFor="">LENGTH OF STAY*</label>
                </Box>
                <DatePicker
                  selected={startDate}
                  className="date_input"
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                To
                <DatePicker
                  selected={endDate}
                  className="date_input"
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
                <Box>
                  <Button
                    {...buttonStyle}
                    title="Send    "
                    style={{ marginTop: "30px" }}
                  />
                </Box>
              </Container>
            </ContactFormWrapper>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {
    backgroundColor: "#000",
    pb: "50px",
  },
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "20px"],
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "button",
    fontSize: "18px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    colors: "secondaryWithBg",
    color: "#fff",
    backgroundColor: "#000",
  },
};

export default Newsletter;
