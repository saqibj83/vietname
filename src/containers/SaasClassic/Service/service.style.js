import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 75px 0 75px 0;
  background: #000;

  @media (max-width: 550px) {
    padding: 75px 0 5px 0;
  }

  .primary-cta {
    text-decoration: none;
    color: #000;
    margin: -40px 20px 20px;
    font-size: 18px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    background: linear-gradient(
      90deg,
      rgba(190, 123, 14, 1) 0%,
      rgba(213, 149, 42, 1) 17%,
      rgba(203, 158, 71, 1) 35%,
      rgba(235, 194, 113, 1) 50%,
      rgba(199, 133, 28, 1) 90%,
      rgba(215, 131, 0, 1) 100%
    );
    box-shadow: #000 3px 3px 6px 0;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
  }
  .prime-cta {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
  }
  // .prime-cta .tooltiptext {
  //   visibility: hidden;
  //   background-color: #000000;
  //   color: #fff;
  //   text-align: center;
  //   border-radius: 6px;
  //   position: absolute;
  //   margin-top: -62px;
  //   margin-left: -293px;
  //   padding: 4px;
  //   border: 1px solid #eba800;
  //   z-index: 90;
  //   width: 150px;
  // }

  // .prime-cta:hover .tooltiptext {
  //   visibility: visible;
  // }
  .service_item {
    position: relative;
    text-align: center;
    .service_icon {
      width: 110px;
      height: 110px;
      border-radius: 35px;
      background-color: #ffecef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 28px auto;
      color: #ff4361;
      @media (max-width: 990px) {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }
  }
  .non-mobile {
    display: none;
  }
  .non-desktop {
    display: block;
  }
  h5 {
    color: #000;
  }

  @media (max-width: 550px) {
    .non-desktop {
      display: none;
    }
    .non-mobile {
      display: block;
    }
    .container {
      padding: 0 !important;
    }
    h5 {
      color: #000;
      font-size: 12px;
      text-align: center;
    }
    tbody {
      height: 450px;
    }
    .non-mob {
      display: block;
    }
    td:nth-child(1),
    th:nth-child(1) {
      width: 25px !important;
      font-size: 11px !important;
    }
    td:nth-child(2),
    th:nth-child(2) {
      width: 55px !important;
      font-size: 10px !important;
      text-align: center;
      padding-right: 10px;
    }
    td:nth-child(3),
    th:nth-child(3) {
      width: 25px !important;
      font-size: 10px !important;
      text-align: center;
    }
    td:nth-child(4),
    th:nth-child(4) {
      width: 44px !important;
      font-size: 10px !important;
    }
    td:nth-child(5),
    th:nth-child(5) {
      width: 50px !important;
      font-size: 10px !important;
    }
    td:nth-child(6),
    th:nth-child(6) {
      width: 40px !important;
      font-size: 10px !important;
    }
    td:nth-child(7),
    th:nth-child(7) {
      width: 40px !important;
      font-size: 10px !important;
      text-align: center;
    }
  }

  table {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1 0 100%;
    }
  }
  thead {
    background: linear-gradient(
      to right,
      #eba800 0%,
      #ffe8b9 34%,
      #f7a500 94%,
      #d89127 100%
    );
  }
  tbody {
    overflow: scroll;
    width: 100vw;
    height: calc(100vh - 2rem - 50px);
    border-top: 1px solid grey;
    height: 550px;
    border-left: 1px solid #eba800;
    border-right: 1px solid #eba800;
    border-bottom: 1px solid #eba800;
  }

  /* Step 3: apply flex to all rows */
  thead tr,
  tbody tr {
    display: flex;
    justify-content: space-between;
    padding: 3px 5px;
  }

  thead tr {
    height: 40px;
    align-items: center;
    margin-right: 15px;
  }

  th,
  td {
    text-align: left;
    vertical-align: middle;
    padding: 15px 0 15px 10px;
    color: #fff;
  }

  tbody tr:nth-child(even) {
    background-color: #242323;
  }

  td:nth-child(1),
  th:nth-child(1) {
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    color: #eba800;
    text-align: center;
  }
  td:nth-child(2),
  th:nth-child(2) {
    width: 200px;
    font-size: 18px;
    font-weight: bold;
    color: #eba800;
    text-align: center;
  }
  td:nth-child(3),
  th:nth-child(3) {
    width: 100px;
    text-align: center;
  }
  td:nth-child(4),
  th:nth-child(4) {
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    color: #eba800;
    text-align: center;
  }
  td:nth-child(5),
  th:nth-child(5) {
    width: 100px;
    text-align: center;
  }
  td:nth-child(6),
  th:nth-child(6) {
    width: 100px;
    text-align: center;
  }
  td:nth-child(7),
  th:nth-child(7) {
    width: 120px;
    text-align: center;
  }
  .service_item_col {
    &:nth-child(1) {
      .service_item {
        .service_icon {
          font-size: 56px;
          @media (max-width: 990px) {
            font-size: 48px;
          }
        }
      }
    }

    &:nth-child(2) {
      .service_item {
        .service_icon {
          background-color: #eaf9ff;
          color: #45b1e1;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #45b1e1;
        }
      }
    }

    &:nth-child(3) {
      .service_item {
        .service_icon {
          background-color: #fff6d3;
          color: #d6ab00;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #d6ab00;
        }
      }
    }

    &:nth-child(4) {
      .service_item {
        .service_icon {
          background-color: #e4ffee;
          color: #40975f;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
          i {
            height: 36px;
          }
        }
        h3 {
          color: #40975f;
        }
      }
    }

    &:nth-child(5) {
      .service_item {
        .service_icon {
          background-color: #f4f4ff;
          color: #5856d6;
          font-size: 32px;
          @media (max-width: 990px) {
            font-size: 28px;
          }
        }
        h3 {
          color: #5856d6;
        }
      }
    }
  }
`;

export default SectionWrapper;
