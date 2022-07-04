import styled from "styled-components";

const NewsletterWrapper = styled.div`
  position: relative;
  background: #e9bc66 !important;
  padding: 44px 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -105px;
  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  section#join_section {
    background: #000 !important;
  }
  .react-datepicker-wrapper {
    position: relative;
    width: 40% !important;
  }
  .emil {
    margin-top: 60px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
    .emil {
      margin-top: -30px !important;
    }
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  .date_input {
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    padding: 10px 15px;
    border-color: #514f50;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  .email_input {
    flex-grow: 1;
    margin-right: 20px;
    margin-bottom: 40px;
    font-size: 18px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #000;
        }
        .highlight {
          background: #000;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      padding: 10px 15px;
      border-color: #514f50;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #000;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export default NewsletterWrapper;
