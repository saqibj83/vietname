import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { openModal, closeModal } from "@redq/reuse-modal";
import Box from "common/components/Box";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import { BannerWrapper, VideoWrapper } from "./banner.style";
import vietnam from "common/assets/image/saasClassic/vietnam.png";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/jjR_xwUZedI"
      frameBorder="0"
    />
  </VideoWrapper>
);

const BannerSection = ({ row, contentWrapper, title, imageWrapper }) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <NextImage
              className="cyprus-img"
              src={vietnam}
              alt="cyprus image"
            />
          </Box>
          <div className="video-section">
            <Fade bottom>
              <ReactPlayer
                url="https://www.youtube.com/embed/nsnIcHXe_TQ"
                light="https://cdn.triton-series.com/wp-content/uploads/2019/12/05122106/bg-vietnam.png"
                playing
                width="711px"
                height="400px"
                controls
              />
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M21-DL5I5z0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
              {/* <VideoModal>
                <NextImage src={BannerImage} alt="banner image" />
                <PlayButton tabIndex="1000" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal> */}
            </Fade>
          </div>
          <Box {...contentWrapper}>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              At the Hoiana Resort & Golf, VIETNAM
              <br />
              Wednesday 1st to Monday 13th March 2023
            </p>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: ["100%", "100%", "80%", "55%", "45%"],
    mb: "40px",
  },
  title: {
    fontSize: ["24px", "32px", "40px", "42px", "46px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.2",
    textAlign: "center",
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#fff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#fff",
    mb: 0,
    as: "span",
  },
  fillButton: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    colors: "secondaryWithBg",
    height: "46px",
    minWidth: ["auto", "150px"],
    height: ["40px", "46px"],
    minHeight: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "35px",
  },
  button: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    color: "#fff",
    colors: "secondary",
    height: ["40px", "46px"],
    minHeight: "auto",
  },
};

export default BannerSection;
