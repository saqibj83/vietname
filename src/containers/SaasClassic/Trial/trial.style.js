import styled from "styled-components";

const SectionWrapper = styled.section`
  background: #000;
  padding: 100px 0 0 0;
  .vender-logos {
    width: 25%;
    float: left;
    text-align: center;
  }
  @media (max-width: 550px) {
    .vender-logos {
      width: 50%;
      float: left;
      text-align: center;
      margin-bottom: 10px;
      padding: 10px;
    }
  }
`;

export default SectionWrapper;
