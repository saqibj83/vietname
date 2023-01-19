import styled, { createGlobalStyle, keyframes } from "styled-components";

const Fade = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
const FadeUp = keyframes`
  0% {
		opacity: 0;
    transform: scale(.5)
	}
	100% {
		opacity: 1;
    transform: scale(1)
	}
`;

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'gill-sans-nova', sans-serif !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'gill-sans-nova', sans-serif !important;
    text-transform: uppercase;
  }

  section {
    position: relative;
    text-transform: uppercase !important;
  }


  h3, h4, h5 {
    font-size: 18px;
  }
  .btn-bg {
    background: linear-gradient(90deg,#f5bf40,#ffe19c 50%,#f5bf40 100%,#f5bf40 0) !important
  }


  @media (max-width: 550px) {
    h3, h4 {
      font-size: 14px;
    }

  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 18px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #EBA800;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #EBA800;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #EBA800;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #EBA800;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .video-modal{
    background: rgba(0,0,0,0.6) !important;
    border: 0 !important;
    animation: ${Fade} .5s ease-out forwards !important;
    overflow-y:auto;
    padding-top:350px;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      animation: ${FadeUp} .7s ease-out forwards !important;
    }
  }
  @media (max-width: 1500px) {
    .video-modal {
      padding-top: 300px;
    }
  }

  @media (max-width: 550px) {
    .video-modal {
      padding-top: 0 !important;
    }
  }
  .reuseModalOverlay,
  .modalCloseBtn{
    
    animation: ${Fade} .5s ease-out forwards !important;
  }

  .video-modal{
    background: transparent !important;
    border: 0!important;
    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }
  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .saas_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 2px 0;
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .main_menu {
        li {
          a {
            color: #000;
            &:hover {
              color: #eba800;
            }
          }
          &.is-current {
            a {
              color: #eba800;
            }
          }
        }
      }
    }
    .hamburgMenu__bar {
      > span {
        background: #eba800;
      }
    }
  }

  .saas_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 5px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #eba800 !important;
          }
        }
        a {
          padding: 5px;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #eba800 !important;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }

    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }
`;
