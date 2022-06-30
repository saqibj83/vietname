import styled from "styled-components";
import BgImage from "common/assets/image/saasClassic/map.png";

const PartnerSectionWrapper = styled.section`
  padding: 120px 0;
  background-color: #f6fbf9;
  background-image: url(${BgImage?.src}),
    linear-gradient(-139deg, #fbca4d 0%, #c78700 100%);
  background-repeat: no-repeat;
  background-position: 25% center;

  @media (max-width: 990px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
`;

export default PartnerSectionWrapper;
