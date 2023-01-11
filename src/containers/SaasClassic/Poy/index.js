import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";

import SectionWrapper from "./poy.style";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="poy">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="Player of the year" />
        </Box>
        <Box className="overFlow">
          <div className="css-clx3hw-container">
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/f8000ca9-3d8f-4c40-9be5-fc41d6e8dd81"
            >
              <div className="css-8lzzqe-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    1<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/eb49678a-c2b7-433a-a063-a8f5b25fcc23.jpg?d=140x140"
                      alt="Photo of Stephen Chidwick"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Stephen Chidwick</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,904 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2c2db17e-77b1-40fd-861c-6957a3705061"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    2<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b01ffe82-235e-43d6-a2ed-031e687d8f72.jpg?d=140x140"
                      alt="Photo of Sam Greenwood"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                      alt="CA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sam Greenwood</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,543 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9d56c803-1441-404a-a555-99f269f1289c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    3<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/eda67740-9092-49fa-b756-2a049fad4820.jpeg?d=140x140"
                      alt="Photo of Jason Koon"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jason Koon</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,374 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/53469664-8a04-48c1-b581-1195c4171423"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    4<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/0c938087-f72e-43ce-ab4e-88228c32bffe.jpg?d=140x140"
                      alt="Photo of Mikita Badziakouski"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                      alt="BY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Mikita Badziakouski</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,348 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/0845568d-5ecf-419e-988c-e6c47b28c0ec"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    5<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/96a1ac2c-2cd6-4b7d-ba99-334fbcf74439.jpg?d=140x140"
                      alt="Photo of Seth Davies"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Seth Davies</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,328 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/1e81f315-271b-4a8b-b99c-5148b27dc35f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    6<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/71572cf9-858f-455f-af91-cea6f82131d5.jpg?d=140x140"
                      alt="Photo of Danny Tang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Danny Tang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,322 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/52f459c7-688a-4f1d-bdd5-50b723df663d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    7<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b09d0801-f977-4e93-99d1-6d256dfa91cd.jpg?d=140x140"
                      alt="Photo of Isaac Haxton"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Isaac Haxton</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,208 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5525026e-eb15-48c9-90c8-70d6a5042818"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    8<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/78042c31-e4aa-4c53-bf4d-54439ffe92f3.jpg?d=140x140"
                      alt="Photo of Paul Phua"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Paul Phua</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,171 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/880fd15d-29b2-4ecf-8481-e518e51f7307"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    9<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4dcdc6f8-9618-4b21-8a18-39f95a219121.jpg?d=140x140"
                      alt="Photo of Michael Addamo"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                      alt="AU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Michael Addamo</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">1,074 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/4fc3d87c-5bb0-41e6-9f1e-0496b97ca455"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    10<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7a66aaac-c34d-4806-b0ec-cb2b37b40e70.jpg?d=140x140"
                      alt="Photo of Daniel Dvoress"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                      alt="CA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Daniel Dvoress</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">997 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a65cce77-57ea-46da-92ba-1ec4c1520a6f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    11<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/75049f62-da85-4d2b-b01a-c6a68b4e8207.jpeg?d=140x140"
                      alt="Photo of Patrik Antonius"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fi.svg"
                      alt="FI flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Patrik Antonius</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">929 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/39ec9138-4b03-49a2-ae81-19b8c03cd14c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    12<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a6ae0afb-ac3f-44cc-aaea-50d2fd852698.png?d=140x140"
                      alt="Photo of Chin Wei Lim"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Chin Wei Lim</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">909 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/554a3b45-1854-4fb3-8422-8a0577589df1"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    13<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a7e26eb6-3ce9-4f68-8c60-49b3acf0c727.jpg?d=140x140"
                      alt="Photo of Tom Dwan"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tom Dwan</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">908 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/3970ce21-3d14-4bdc-97ca-98df8220d040"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    14<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4dbdbc39-8bbe-483f-bc29-ad1b7e10140c.png?d=140x140"
                      alt="Photo of Phil Ivey"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Phil Ivey</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">866 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/272da4f3-b67c-499a-a122-d63ae0949c34"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    15<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/2dfc566a-dae4-4503-aa54-706da1ad5833.jpg?d=140x140"
                      alt="Photo of Henrik Hecklen"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/dk.svg"
                      alt="DK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Henrik Hecklen</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">855 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/fe82f9b4-db2f-42e1-8e9d-def9c04d244e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    16<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a3d9bfb2-ca40-4dde-8562-2d946d948ba8.jpg?d=140x140"
                      alt="Photo of Michael Soyza"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Michael Soyza</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">814 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/bc22257e-6456-462d-9da5-dd2061b7ecc3"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    17<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/feade3d2-195a-4334-8da6-9cebe3494f86.jpg?d=140x140"
                      alt="Photo of Elton Tsang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Elton Tsang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">783 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a43e8d69-eeac-422c-97c4-7114b3517e67"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    18<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/296b93a0-4689-49fb-b16e-61e56e4199c5.jpg?d=140x140"
                      alt="Photo of Chris Brewer"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Chris Brewer</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">752 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e048caf7-3ff8-44ba-97a9-50f0260a0bce"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    19<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/622b49ac-cd3b-4d59-94f5-8c09f71d7a16.jpg?d=140x140"
                      alt="Photo of Benjamin Tollerene"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Benjamin Tollerene</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">743 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/535ec5e4-349b-4886-9411-8dcdaa8da3f4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    20<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b70c4b7b-780c-4e58-ae75-3de053246305.jpg?d=140x140"
                      alt="Photo of Fedor Holz"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Fedor Holz</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">736 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/1402b2a5-4d2c-41de-a884-ad600a8e3dff"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    21<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c69a4a4c-b4af-45c7-8123-99fdfce825ff.jpg?d=140x140"
                      alt="Photo of Kannapong Thanarattrakul"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                      alt="TH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">
                    Kannapong Thanarattrakul
                  </div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">730 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/0309d567-1fbe-4035-a254-e733aa0b154a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    22<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/74d2c4a6-9dae-4d47-b90e-7916af80d856.jpg?d=140x140"
                      alt="Photo of Laszlo Bujtas"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hu.svg"
                      alt="HU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Laszlo Bujtas</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">704 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/b9e6b73c-6d13-4760-a74b-38877fbc5905"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    23<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/96a15123-b62c-457d-b8a9-85c6ed925270.png?d=140x140"
                      alt="Photo of Michael Watson"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                      alt="CA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Michael Watson</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">695 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/1846ff55-6026-4bf9-9db7-3cb8fdfd6928"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    24<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5a6c1729-3506-43d1-9231-10fa9cd5b343.jpg?d=140x140"
                      alt="Photo of Wayne Heung"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Wayne Heung</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">681 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/aa0dae59-9aa4-4681-9bd1-305a1acfcf34"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    25<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7a53f635-3b1a-4edd-bfae-b8300cf7f0e2.jpg?d=140x140"
                      alt="Photo of Wiktor Malinowski"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/pl.svg"
                      alt="PL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Wiktor Malinowski</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">663 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9f2d9b84-e402-4f70-be12-6bde319a9cee"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    26<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7069bf0d-291a-4302-b46e-b48285181dcb.jpg?d=140x140"
                      alt="Photo of Kevin Paqué"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kevin Paqué</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">629 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a849ee9b-d800-4405-91bf-9e7aa3856cf0"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    27<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/241bff71-de4f-4093-8437-9a175552fefc.jpg?d=140x140"
                      alt="Photo of Steve O'Dwyer"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ie.svg"
                      alt="IE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Steve O'Dwyer</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">622 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/731a4453-b177-41b3-aff5-f3168110b051"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    28<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b306a565-4450-437c-bc16-1687259d2993.jpg?d=140x140"
                      alt="Photo of Erik Seidel"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Erik Seidel</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">614 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ca632e80-d671-468d-8a7e-4746f0da612f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    29<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b0af9b07-ca1c-4418-834f-a533ca93869d.jpg?d=140x140"
                      alt="Photo of Matthias Eibinger"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                      alt="AT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Matthias Eibinger</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">612 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/314c0930-56af-449a-9ab1-aefab619f81b"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    30<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a028f68f-7ff2-4b09-9b88-7e20b5da946b.jpg?d=140x140"
                      alt="Photo of Yuri Dzivielevski"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                      alt="BR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Yuri Dzivielevski</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">609 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8b53496b-af5e-41cd-b5eb-9d5889b207da"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    31<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/91b656e1-916a-4dbe-8d53-8b355c746f74.jpg?d=140x140"
                      alt="Photo of Punnat Punsri"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                      alt="TH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Punnat Punsri</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">607 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/facbdb53-17d4-46a3-8466-9afc3abe29ae"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    32<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/3c9919c6-e3f1-4383-9e22-47e5ce1024ca.jpg?d=140x140"
                      alt="Photo of Sam Grafton"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sam Grafton</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">598 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/7e9fd496-bc01-49cf-ad11-b2bbf542bf7c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    33<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7a011066-d36c-404f-be65-d4533a142c8c.jpg?d=140x140"
                      alt="Photo of Richard Yong"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Richard Yong</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">587 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/eefd1975-034e-4690-8a15-ca0c928f54d1"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    34<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/07ba3a99-7f65-47df-9341-ed2fda99dc09.png?d=140x140"
                      alt="Photo of Rui Cao"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                      alt="FR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Rui Cao</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">581 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/b703bb2a-4bab-4e20-ad1b-ba1cbbd4eac4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    35<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/cb3b3215-eb05-4459-9b86-e7fba136db08.jpg?d=140x140"
                      alt="Photo of Kiat Lee"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kiat Lee</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">557 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/6c0b78b4-4b1b-40fe-aede-1433de66913c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    36<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/97cad5fb-8234-4681-98f1-d59093212cd9.jpg?d=140x140"
                      alt="Photo of Kahle Burns"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                      alt="AU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kahle Burns</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">541 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/d8f097dc-7130-4d12-b13d-d883f674062a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    37<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4c711a4b-5958-493c-a5d7-0fa28ee1cec9.jpg?d=140x140"
                      alt="Photo of Tony Guoga"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lt.svg"
                      alt="LT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tony Guoga</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">532 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/67826bb1-a9a3-421b-af4d-6ffe4c97bf6e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    38<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f0ce1ce7-63f7-49ba-9fb7-cec225382fce.jpg?d=140x140"
                      alt="Photo of Jeremy Ausmus"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jeremy Ausmus</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">510 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/db600686-b376-47d5-b86b-df2bf0900772"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    39<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/63ff9456-bbb2-4c9f-8d1c-34d5763c5a26.jpg?d=140x140"
                      alt="Photo of Artur Martirosian"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Artur Martirosian</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">486 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/457de4fc-845a-4274-8898-a587e74831ec"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    40<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/bd4b0609-d264-4798-8de4-ca787f1201f3.jpg?d=140x140"
                      alt="Photo of Pieter Aerts"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/be.svg"
                      alt="BE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Pieter Aerts</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">473 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/12cd4cf0-2291-4268-a28a-925df022c5bd"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    41<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5a0f6182-7c3c-4526-aa5a-db7bcf09c1c4.jpg?d=140x140"
                      alt="Photo of Benjamin Heath"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Benjamin Heath</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">468 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ae8e38cb-66ab-42aa-9c7f-2fbe92abb2f0"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    42<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/69106630-7895-4726-9338-da069034c1e3.jpg?d=140x140"
                      alt="Photo of Santi Jiang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Santi Jiang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">468 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/6f79df7e-682f-4f9a-9ea9-4c9404dcc993"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    43<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/ec20c2dc-a4c1-4956-abbe-feff4e97485f.jpg?d=140x140"
                      alt="Photo of Aleksejs Ponakovs"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lv.svg"
                      alt="LV flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Aleksejs Ponakovs</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">444 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/fe83b02d-6296-450c-a295-1c55d56ccbe0"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    44<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7d2d24ed-bf46-42fb-8039-5b0965568367.jpg?d=140x140"
                      alt="Photo of Linus Loeliger"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ch.svg"
                      alt="CH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Linus Loeliger</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">429 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/604cf743-0a50-4708-84be-33fc2e96d30d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    45<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/59703ce1-e110-444b-bdff-b60499f2a758.jpg?d=140x140"
                      alt="Photo of Orpen Kisacikoglu"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Orpen Kisacikoglu</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">425 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9fd7a4d6-a93e-46fa-8749-e447579ecfda"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    46<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/bc9c7245-b42d-4692-ac9e-b42d87bb856c.jpg?d=140x140"
                      alt="Photo of Fahredin Mustafov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/bg.svg"
                      alt="BG flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Fahredin Mustafov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">403 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5d774764-90ef-4512-beb4-9e24d0edc0fc"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    47<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e2e1a458-a483-4d9e-9509-4e097cb6aa83.png?d=140x140"
                      alt="Photo of Winfred Yu"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Winfred Yu</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">395 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ec13eff7-95c1-4295-b767-b18a96fc4e02"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    48<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/03d2e9f6-71fc-438b-910e-bc09a5a91bb5.png?d=140x140"
                      alt="Photo of Bjorn Li"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Bjorn Li</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">375 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9aa809a7-7b57-43cd-a878-590fe8f744ea"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    49<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/fcb17e3c-da57-4909-b14d-5c5007167117.jpg?d=140x140"
                      alt="Photo of Talal Shakerchi"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Talal Shakerchi</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">371 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/0df5124c-38be-4fbc-a423-5e8258926abb"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    50<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a7657ef9-809c-49f0-b94c-a7e73cef7e3b.png?d=140x140"
                      alt="Photo of Wai Kin Yong"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Wai Kin Yong</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">370 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9caf86c2-912a-483d-9120-dcd0ed7a57ca"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    51<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/28431eb5-21f1-4edb-9744-0a1c0b64bc21.jpg?d=140x140"
                      alt="Photo of Lun Loon"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Lun Loon</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">345 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/c0845360-42f7-4c9a-9791-f73ca07bc680"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    52<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/ad4f49c2-93ef-470d-8aa1-c8656a7c18f0.jpg?d=140x140"
                      alt="Photo of Jonathan Jaffe"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jonathan Jaffe</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">345 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/4ede2cbf-72ad-4e79-8451-a9ce4dbad254"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    53<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e73e77d6-efea-4769-8ce9-67a3f62134a8.jpg?d=140x140"
                      alt="Photo of Bruno Volkmann"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                      alt="BR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Bruno Volkmann</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">341 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/294ce162-9876-4340-bd94-af13f0342271"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    54<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/981aa1f3-ef0a-445d-954a-46fbc50a9850.png?d=140x140"
                      alt="Photo of Rob Yong"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Rob Yong</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">341 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/aca78316-3a98-494a-afae-b2ee76c70ef3"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    55<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4548cf9e-f3a9-4989-b077-0ce8a24c29a7.jpg?d=140x140"
                      alt="Photo of Tommy Kim"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/kr.svg"
                      alt="KR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tommy Kim</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">318 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/d8a27dbc-432c-4221-8ae5-7375c24d5f34"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    56<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/fba11f0e-9239-45ce-a842-a607a8a38e23.jpeg?d=140x140"
                      alt="Photo of Karl Chappe-Gatien"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                      alt="FR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Karl Chappe-Gatien</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">310 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/025ca9c2-5215-4194-880d-59c4ec2a91a0"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    57<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c8066edb-d73a-4807-a737-4a2d1759bbb6.jpg?d=140x140"
                      alt="Photo of Christoph Vogelsang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Christoph Vogelsang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">281 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/da369124-b567-44e1-acff-4489680b1c06"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    58<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/77cfb8af-1e6a-4b27-9160-41085b498383.jpg?d=140x140"
                      alt="Photo of Nick Petrangelo"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Nick Petrangelo</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">275 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/7dd969e5-bbe3-4cfe-8c2e-5b3025633708"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    59<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b5aa9acc-3ef0-4ab9-8470-42d9a86145a7.jpg?d=140x140"
                      alt="Photo of Viktor Kudinov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Viktor Kudinov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">271 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/3f001bc8-e2e2-4c6f-bea7-6270756ab1e6"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    60<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/2ef1549f-9596-4069-ae12-ded3d99b8e21.jpg?d=140x140"
                      alt="Photo of Morten Klein"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                      alt="NO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Morten Klein</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">269 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/d931381b-022b-4821-849f-2e78564c4c30"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    61<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b639154e-7af4-4125-8a82-306c4a75e96c.jpg?d=140x140"
                      alt="Photo of Luuk Gieles"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Luuk Gieles</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">262 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/70da1f50-d5fa-460e-9957-5ac7ae8853ea"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    62<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/25c4f051-1edc-4884-b0b5-7d7a7717d9c9.jpg?d=140x140"
                      alt="Photo of Kenneth Kee"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/sg.svg"
                      alt="SG flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kenneth Kee</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">253 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2628ccff-f3c9-46eb-9693-d10ca6c6a0d7"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    63<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/dd5990f7-8e82-429c-8967-05ff1058540a.jpg?d=140x140"
                      alt="Photo of Philip Nagy"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Philip Nagy</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">244 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/6df510da-93e6-4872-b6cc-cefc6a3162fd"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    64<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a082a47c-e7a9-4050-9bff-d8bea34e0feb.jpg?d=140x140"
                      alt="Photo of Adrian Mateos"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Adrian Mateos</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">244 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2b670df3-0f75-4a54-89b4-08e06e749df4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    65<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/421e4f82-26ad-45dd-ae3d-03be1ac40827.jpg?d=140x140"
                      alt="Photo of Christopher Philippou"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/cy.svg"
                      alt="CY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Christopher Philippou</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">242 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5d849065-c02b-40cd-a8be-a8d8e21192fa"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    66<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d331bbcc-7d15-4745-a795-48e815c52dd8.jpg?d=140x140"
                      alt="Photo of Artem Vezhenkov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Artem Vezhenkov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">239 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/882ce0c2-0aca-4e9a-a22b-d01a94d05faf"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    67<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/99486532-e58e-4141-a39d-863de93a9a42.jpg?d=140x140"
                      alt="Photo of Denys Homliavyi"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ua.svg"
                      alt="UA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Denys Homliavyi</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">238 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/d802375e-ed0a-4249-8c43-8f55da285fbf"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    68<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/edb2b8b3-f347-4e37-b997-d926e1f925c5.jpg?d=140x140"
                      alt="Photo of Alex Keating"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Alex Keating</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">224 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5b451496-035e-452e-b068-8bc6e276caa5"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    69<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e265ef94-f6ff-4783-aefa-07fcbf6734a5.jpg?d=140x140"
                      alt="Photo of Brian Kamphorst"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Brian Kamphorst</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">218 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/7541eca7-4744-4f5e-82b9-8319266fd4f5"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    70<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/90070caf-2661-49eb-ac05-170063e05918.jpg?d=140x140"
                      alt="Photo of Ebony Kenney"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ebony Kenney</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">205 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2f17bb49-2390-413a-8d2d-8cccc525aab0"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    71<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/6892fb3e-12f5-4628-b8f5-1b1edc6142ac.jpg?d=140x140"
                      alt="Photo of Viacheslav Buldygin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Viacheslav Buldygin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">194 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a6501020-ebc6-47b1-a180-7e426d390b64"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    72<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5b7ee3c2-feef-4334-9a28-b9dca2324a74.jpg?d=140x140"
                      alt="Photo of Max Silver"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ie.svg"
                      alt="IE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Max Silver</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">192 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a1dac6f0-68d6-4b5a-bd10-a6c88a5f6bb4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    73<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/cd10f1af-f2de-4ee3-a08f-a76cdf49da0c.jpg?d=140x140"
                      alt="Photo of Santhosh Suvarna"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/in.svg"
                      alt="IN flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Santhosh Suvarna</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">189 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/249fac6e-5e4e-4eaf-b367-93b714f8b07f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    74<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/efc3eed9-9f6f-48c3-a87e-ed135f2caf56.jpg?d=140x140"
                      alt="Photo of Timothy Adams"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                      alt="CA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Timothy Adams</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">187 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/02d495c2-8d1d-4602-9c1f-3dcd8c691489"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    75<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a26698ee-5652-449f-ad2a-6665012e2fb9.png?d=140x140"
                      alt="Photo of Pedro Garagnani"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                      alt="BR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Pedro Garagnani</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">182 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/34e50e69-c46f-42d7-9224-726a633b828d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    76<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e89c3f1f-d6be-452b-be09-3b6d7f46ef2b.jpg?d=140x140"
                      alt="Photo of Espen Uhlen Jørstad"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                      alt="NO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Espen Uhlen Jørstad</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">168 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2606ecc9-4eec-4727-aaba-a9addace2f43"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    77<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/87ece0a2-0d8c-4fea-a6e8-a2fd41ff8d3d.jpg?d=140x140"
                      alt="Photo of Ignacio Moron Chavero"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ignacio Moron Chavero</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">165 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/223b7fea-8c33-4964-9a3c-1c5ed5327578"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    78<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1bc681fd-69c0-4657-8f1f-3f7efb21b967.jpg?d=140x140"
                      alt="Photo of Sirzat Hissou"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sirzat Hissou</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">161 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/53d18db2-d839-4834-9188-d735452daf4f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    79<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/53d141f5-0321-4aea-ba60-64098a7d627b.jpg?d=140x140"
                      alt="Photo of Choon Tong Siow"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Choon Tong Siow</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">161 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/1944497c-192e-4027-90e1-0b411fdb74c2"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    80<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f6c3d7f9-7940-4bd2-96c5-ea84f1892ac1.jpg?d=140x140"
                      alt="Photo of Iurii Anisimov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Iurii Anisimov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">158 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/3e9ba538-16b3-4537-807c-81dbda38fd7e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    81<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/659ce180-aafa-465f-b77a-c32e3ad69c42.jpg?d=140x140"
                      alt="Photo of Michael Zhang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Michael Zhang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">154 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/7b518eed-b548-44f3-8c65-34e4fb088570"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    82<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/13b4f4c0-5f93-4804-8bce-c575c6c1fd5b.jpg?d=140x140"
                      alt="Photo of Eric Worre"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Eric Worre</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">151 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/31d17282-7817-4b24-aeb7-7001208d5317"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    83<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/294efbbf-2bd7-42c2-9a19-08a7eab4398e.jpg?d=140x140"
                      alt="Photo of Phachara Wongwichit"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                      alt="TH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Phachara Wongwichit</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">147 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/332fdac4-eae5-4f01-91f3-b4be26d2d0ac"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    84<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e852b8c8-361c-4583-9505-b055c3ccfbf3.jpg?d=140x140"
                      alt="Photo of David  Peters"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">David Peters</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">145 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8200194f-a962-4b72-9554-b85a7bdf996d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    85<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d14ee31b-fa5b-4108-a89e-80a3d9b8e086.jpg?d=140x140"
                      alt="Photo of Teun  Mulder"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Teun Mulder</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">142 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/07b5d178-4633-4a28-98ae-d64c7f961637"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    86<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1768a092-719e-4d03-b295-fb8b1c886a35.jpg?d=140x140"
                      alt="Photo of Andriy Lyubovetskiy"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ua.svg"
                      alt="UA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Andriy Lyubovetskiy</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">142 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/61801c29-088c-412a-8053-d21677afd17f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    87<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/697d9142-0f27-463e-98f1-ef2841180d20.jpg?d=140x140"
                      alt="Photo of Andras Nemeth"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hu.svg"
                      alt="HU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Andras Nemeth</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">137 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a2f2321c-3ba6-4af2-b7ce-ff2aaab263b6"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    88<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/2c13eddd-9e3d-4dde-ac70-4adc6259a57b.jpg?d=140x140"
                      alt="Photo of Horace Wei"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Horace Wei</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">133 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a9be4397-fe3f-4e46-85df-10eb99f587ea"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    89<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/23244ff0-4b24-4dd5-9367-a1ce510c10a9.jpg?d=140x140"
                      alt="Photo of Yaman Nakdali"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Yaman Nakdali</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">132 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ea8dde62-28cb-4e8c-8154-b96652925395"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    90<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/231b8220-a812-4c54-bc5d-0ff82272371e.jpg?d=140x140"
                      alt="Photo of Jean Noel Thorel"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                      alt="FR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jean Noel Thorel</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">131 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e735e0bd-7164-4790-a31a-e10a6f6fc716"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    91<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/cd94ab81-ba07-47cc-bfb9-5a6522aba629.jpg?d=140x140"
                      alt="Photo of Filip Lovric"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/se.svg"
                      alt="SE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Filip Lovric</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">127 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a4e1bda5-71b6-40c4-9629-4a3cf6738b0a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    92<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/9292ed99-16b6-4c19-ad39-1761329cee26.jpg?d=140x140"
                      alt="Photo of Sergio Aido"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sergio Aido</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">126 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9ef41dea-4f00-4b58-b801-87f635ad239b"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    93<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1699ea86-a5ce-4d80-a3c8-2af46e2bd0bc.jpg?d=140x140"
                      alt="Photo of Ryan Yum"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ryan Yum</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">125 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/db4351a8-49da-4da1-bf31-b8375d9935bc"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    94<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5779e051-20f3-4d43-b423-974418c50a97.png?d=140x140"
                      alt="Photo of Daniel Cates"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Daniel Cates</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">125 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/f9ca7c3d-3f06-45b6-92b6-e86d7e57db6b"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    95<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/fc6c9377-7c7c-49d8-a21c-41ea4f87abf1.jpg?d=140x140"
                      alt="Photo of Sean Perry"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sean Perry</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">123 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ea17bbfa-8694-4339-8ac0-da518ceae1c5"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    96<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d61b1522-260a-4d7a-9e7a-88ebef403978.jpg?d=140x140"
                      alt="Photo of Seth Gottlieb"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Seth Gottlieb</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">122 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5376dedd-fd40-4406-96e4-4f3fbe5e1948"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    97<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a6d4fb8f-ffa8-4554-8984-a48920fdff07.jpg?d=140x140"
                      alt="Photo of Alexey Borovkov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Alexey Borovkov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">120 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/35348412-ccb5-4adc-a8f3-2bcf48cafae1"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    98<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/fc62b27c-60ec-454b-b0b3-2fa12adb65fe.jpg?d=140x140"
                      alt="Photo of Fernando Garcia"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Fernando Garcia</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">115 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e2b5c581-72bc-46fc-bfa9-1818b07117fa"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    99<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/14548f43-32a2-481e-9525-455d877b17bf.png?d=140x140"
                      alt="Photo of Devan Tang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Devan Tang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">115 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/b24f3123-efb9-4ea2-b35e-cf4a63c646cf"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    100<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7ec1856c-c11a-4c08-9dcc-ba37894052eb.jpg?d=140x140"
                      alt="Photo of Rene Van Krevelen"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Rene Van Krevelen</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">111 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/c443dcea-2d97-4263-a3bc-db770390c908"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    101<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/dd0c58a7-9fa4-4ae1-8626-6925a2e83f7b.jpg?d=140x140"
                      alt="Photo of Tom Vogelsang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                      alt="NL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tom Vogelsang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">109 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/6496cddf-e71c-4702-81ff-a55d1a4dc20f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    102<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/8aaa9c5a-f8b1-4c76-bc34-e37fcafcf12e.jpg?d=140x140"
                      alt="Photo of Ferdinand Putra"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/id.svg"
                      alt="ID flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ferdinand Putra</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">108 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e966c14d-4c59-4a7f-b9d0-23dcfbcabe71"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    103<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/aea95223-e89a-4eb9-8cae-a9723388a90c.jpg?d=140x140"
                      alt="Photo of Tom-Aksel Bedell"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                      alt="NO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tom-Aksel Bedell</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">106 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8d7dc8ee-6354-4381-a12f-d100c5637910"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    104<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/def9391e-34d7-4a4c-abe5-bb9798be5f47.jpg?d=140x140"
                      alt="Photo of Andy Ni"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                      alt="CN flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Andy Ni</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">96 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/7793643e-9cdb-4a71-a392-a343de44ba3a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    105<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/3da80b50-e6e4-4ba1-8664-a0ec3bc167a3.jpg?d=140x140"
                      alt="Photo of Scott Ball"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Scott Ball</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">94 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/33a9d2b5-9f03-4d77-b03c-b148694be5b8"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    106<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/fc857427-c143-433e-b199-4f770a0fb0f5.jpg?d=140x140"
                      alt="Photo of Alfred DeCarolis"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Alfred DeCarolis</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">88 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e658068b-0003-47ec-bf8e-681671ffc730"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    107<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/54cd203f-976f-43eb-b108-f3515a75287e.jpg?d=140x140"
                      alt="Photo of Brian Rast"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/um.svg"
                      alt="UM flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Brian Rast</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">88 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ef36a927-e0b6-4a33-a092-3837f0890039"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    108<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/9ac12981-5242-4113-8008-f4a7c29da714.jpg?d=140x140"
                      alt="Photo of Andrey Zaichenko"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Andrey Zaichenko</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">86 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/63751623-3f1b-46f6-bd3f-49c913add4d6"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    109<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/9c9baaf0-c769-4ef5-bfb7-bd9d1a36b20c.jpg?d=140x140"
                      alt="Photo of Nicolas Chouity"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lb.svg"
                      alt="LB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Nicolas Chouity</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">85 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/f6808dff-ad8a-4886-8c95-d67689665937"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    110<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5ab1dda8-93ff-4814-9739-41df6ba40c36.jpg?d=140x140"
                      alt="Photo of Selahaddin Bedir"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Selahaddin Bedir</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">84 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/c6479d32-5f65-4401-b159-0a74b7638a7e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    111<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f5ce23a7-0c61-4698-8b66-b1ff2a931786.jpg?d=140x140"
                      alt="Photo of Melika Razavi"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ir.svg"
                      alt="IR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Melika Razavi</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">75 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/517f8a7f-888f-497b-aaab-be0797bed54d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    112<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/89c76eb3-0064-478c-8a74-19f1d0e045c0.jpg?d=140x140"
                      alt="Photo of Martin Nielsen"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fo.svg"
                      alt="FO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Martin Nielsen</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">74 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/fdf3f70c-e639-46e7-9547-e9a91164ab30"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    113<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/07d9ec81-253f-48fc-9e72-a95138fdf54f.jpg?d=140x140"
                      alt="Photo of Gregoire Auzoux"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                      alt="FR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Gregoire Auzoux</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">74 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a63ecde3-dfb7-4845-9078-07773c66f326"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    114<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/2cd39256-b60a-4e9f-8509-beda2d9daa67.jpg?d=140x140"
                      alt="Photo of Nikita Kuznetcov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Nikita Kuznetcov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">72 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/75283117-4695-4430-b83e-6e02d47d8133"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    115<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1933a3bc-c2ba-49e9-be19-3e4ebe401db3.jpg?d=140x140"
                      alt="Photo of Dario  Sammartino"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/it.svg"
                      alt="IT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Dario Sammartino</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">72 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/e5766f54-c372-47ab-ac24-bd56f35bc964"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    116<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/3e115ebe-ae39-4a50-b548-c75b49c202d6.jpg?d=140x140"
                      alt="Photo of Thomas Muehloecker"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                      alt="AT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Thomas Muehloecker</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">71 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ddf720b9-cc6a-4c15-bb20-56ef1c0da000"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    117<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/6c7d501d-ab50-4ddd-a73b-a3b568984e00.jpg?d=140x140"
                      alt="Photo of Vladi Chaoulov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/il.svg"
                      alt="IL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Vladi Chaoulov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">71 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/709e2c28-13b1-462a-9cd5-f7a72d0c80eb"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    118<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c05ef30b-a9ca-4e44-9e3d-acedbcdceb5a.jpg?d=140x140"
                      alt="Photo of Wu Ye Wei"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/mo.svg"
                      alt="MO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Wu Ye Wei</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">65 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/f5b41671-93db-4445-a7ff-ee1ea0542de7"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    119<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c32ef523-729c-4ed0-b45e-b31c09116117.jpg?d=140x140"
                      alt="Photo of Johan Guilbert"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                      alt="FR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Johan Guilbert</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">64 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/271bc55e-8547-48bb-a06f-81eeb49c12dc"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    120<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/11df4209-f5c9-42b8-872a-26734954c1e7.jpg?d=140x140"
                      alt="Photo of Bali Gee"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Bali Gee</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">63 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/11b2aa35-416c-4bfc-9c9c-4901d2a9657e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    121<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/40ce4d86-17f6-470b-81b8-24a4f1edec62.jpg?d=140x140"
                      alt="Photo of Iakov Onuchin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Iakov Onuchin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">58 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9bc734fc-7454-4caa-b61e-fdd09660a268"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    122<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/00ac5cb4-6f20-4236-8ce5-14e78c178170.jpg?d=140x140"
                      alt="Photo of Kent Staahle"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                      alt="NO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kent Staahle</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">57 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/13f15227-4d9d-4419-b4ee-427c9cec05eb"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    123<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/0d3796ed-39b5-4314-95ec-02106250d1b1.png?d=140x140"
                      alt="Photo of Arthur Yap"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Arthur Yap</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">57 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ce18826e-34b7-4f6a-81d2-3760b187d999"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    124<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/eeff7783-edb6-4296-8399-038aec0fb8fe.jpg?d=140x140"
                      alt="Photo of Christopher Wong"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Christopher Wong</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">50 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2d499731-d08f-42fd-b3a5-b2b66bcfe74a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    125<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5dc4a216-49f2-4617-83a3-20c485097fa2.jpg?d=140x140"
                      alt="Photo of Cristobal Hidalgo"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Cristobal Hidalgo</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">48 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/800b6a39-25d6-4f3f-9b6a-1e17c1a5d40c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    126<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/974f7b74-06d0-461b-a13c-8e206dfcb0d0.jpg?d=140x140"
                      alt="Photo of Damir Zhurgalin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/kz.svg"
                      alt="KZ flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Damir Zhurgalin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">48 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/87d13de1-1af1-4d38-a67b-3a6ec9e00fe6"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    127<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/b95f1837-7c4e-4859-9f61-669ca039167a.jpg?d=140x140"
                      alt="Photo of Sosia Jiang"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/nz.svg"
                      alt="NZ flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sosia Jiang</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">45 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/4b1d7d44-8c8e-4746-a7d5-8ebbfb8683a7"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    128<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1abeb0b6-6718-48b4-b650-8dc43e8ed4d5.jpg?d=140x140"
                      alt="Photo of Aleksei Platonov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Aleksei Platonov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">42 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ff60d4f4-d551-4041-becc-1dfb1ed9c453"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    129<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a70958c4-a0c5-450f-bc81-b1b6d0de2ba5.jpg?d=140x140"
                      alt="Photo of Theodore MC Quilkin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gd.svg"
                      alt="GD flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Theodore MC Quilkin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">40 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/950d48e3-1d9d-4614-83ce-9710139c2553"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    130<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4b10281d-5c08-446d-805f-27592fc5befd.jpg?d=140x140"
                      alt="Photo of Mustapha Kanit"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/it.svg"
                      alt="IT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Mustapha Kanit</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">38 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5ba34014-ba35-463f-af86-2f839571ba8d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    131<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/96d05a3a-86fd-4156-8410-309549505098.jpg?d=140x140"
                      alt="Photo of Daniel Moya Pulido"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Daniel Moya Pulido</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">37 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a024fc35-a857-4158-bdf6-1cff6e555734"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    132<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/720c56d2-edde-4cc9-a2df-4f58218c48b9.jpg?d=140x140"
                      alt="Photo of Kenneth Wong"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                      alt="HK flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kenneth Wong</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">36 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/cd21b83a-355c-4363-ac99-5e8028f6ba7e"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    133<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/0d4f063a-3179-46ee-b2dc-5eacb4b76128.jpg?d=140x140"
                      alt="Photo of Albert Daher"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lb.svg"
                      alt="LB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Albert Daher</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">35 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/87620422-33c2-4a0b-9dfc-fe2dc7366eff"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    134<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1653e2ff-9db9-4cee-b48f-dcfecf562b78.jpg?d=140x140"
                      alt="Photo of Ramin Hajiyev"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/az.svg"
                      alt="AZ flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ramin Hajiyev</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">33 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/45792f92-80ff-4b3d-938f-888470554cb3"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    135<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/8a3f25bb-8bb5-49ff-9616-ad4898ca0185.jpg?d=140x140"
                      alt="Photo of Bahram Chobineh"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ir.svg"
                      alt="IR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Bahram Chobineh</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">32 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/b354c632-7f3e-495e-839e-733b5f5c5b77"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    136<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/9b34a6d6-a7ef-40eb-9a85-61f21655ea1c.jpg?d=140x140"
                      alt="Photo of Giorgii Shkulukhiia"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Giorgii Shkulukhiia</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">32 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/541a3924-4542-4fd0-9671-ef53f50cf394"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    137<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/e9b54a55-db17-400c-8743-e826d1949a1f.jpg?d=140x140"
                      alt="Photo of Ruida Lin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                      alt="CN flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ruida Lin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">31 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/38addad0-1d66-46fc-bb7e-113959374f98"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    138<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/53e5d922-567d-4654-a5b7-db2b815427cf.jpg?d=140x140"
                      alt="Photo of Saman Nakhjavani"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Saman Nakhjavani</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">26 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/cb4fc6bf-b8b7-4199-a034-779fb818b71c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    139<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d6a86ad1-10f5-49e5-96c1-66c802ee8bd3.jpg?d=140x140"
                      alt="Photo of Javier Suarez"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Javier Suarez</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">25 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/11bf317b-152b-4f10-9ab8-e9c8378ec398"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    140<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/6c378d6a-f93e-41d9-925f-affd98aa824b.jpg?d=140x140"
                      alt="Photo of Barak Wisbrod"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/il.svg"
                      alt="IL flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Barak Wisbrod</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">24 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8a56486f-ba83-411d-abfd-0e2a7a37503d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    141<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/9bd7f68e-f07f-48b0-90a7-ad7ea7756927.jpg?d=140x140"
                      alt="Photo of Maher Nouria"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tn.svg"
                      alt="TN flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Maher Nouria</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">24 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/af90ffbf-b1b2-4ca2-a6a0-1fc4e06a5fd4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    142<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a38c7677-a969-499e-b254-2f8a6f8fe83e.jpg?d=140x140"
                      alt="Photo of Rainer Kempe"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Rainer Kempe</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">23 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ebc6d46e-54f3-4c2f-a0b7-6bbf44b51e45"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    143<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/73fb146d-e3d6-46d0-b9d2-2ffdc8fb58e3.jpg?d=140x140"
                      alt="Photo of Raphael Schreiner"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                      alt="AT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Raphael Schreiner</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">23 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/644c518d-443a-4ea5-8bf0-d215c93ff1fb"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    144<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/06b1fed3-cba6-4b21-9f58-dbe367a89b8a.jpg?d=140x140"
                      alt="Photo of Kerem Tibuk"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Kerem Tibuk</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">20 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8648391e-3210-41b4-abfb-44be40f1764f"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    145<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/a33153a7-a6bc-4eca-9b9d-2f31cb7f31a2.jpg?d=140x140"
                      alt="Photo of Paul Newey"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Paul Newey</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">20 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8b9abe39-3ccc-4ae8-bc8a-7c179c7d6fab"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    146<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7d96125d-d7ad-465a-8262-14345a686d40.jpg?d=140x140"
                      alt="Photo of Abraham Passet"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Abraham Passet</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">20 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ab374695-8f0b-43f4-bd93-fb076c2b8018"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    147<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/843baf2a-fcad-4ae5-9bd5-bec36e29f4c9.jpg?d=140x140"
                      alt="Photo of Mehmet  Salih Samsa"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Mehmet Salih Samsa</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">20 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/de1f956e-4f17-44ac-837d-63bcd4dd7657"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    148<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/050bf6dc-12de-46a3-aa94-0aa98b985c75.jpg?d=140x140"
                      alt="Photo of Pablo Navarro"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Pablo Navarro</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">19 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/80b942c1-7abd-4093-86a2-c5addcf157fe"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    149<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/24e70f57-dbd7-4abd-be51-d88592c3dfbd.jpg?d=140x140"
                      alt="Photo of Witsarut Ketnarin"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                      alt="TH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Witsarut Ketnarin</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">18 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/fbab0f1c-f185-4420-916d-16220f76d57a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    150<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/4f1ad84f-58fe-4013-8715-b9c3d88564a4.jpg?d=140x140"
                      alt="Photo of Sergio Marti Aguilar"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                      alt="ES flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sergio Marti Aguilar</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">14 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/0c8ffd44-8911-42cf-8478-af27c9b008f4"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    151<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7ade61e0-1251-4dbc-9d57-cd0ba1936fac.jpg?d=140x140"
                      alt="Photo of Wei Hsiang Yeu"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Wei Hsiang Yeu</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">14 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/309b1883-cf09-47e0-9993-d1ccda776161"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    152<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/08e7bac0-c6de-434a-99b6-7c8c98357644.png?d=140x140"
                      alt="Photo of Robert Lau-Sims"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Robert Lau-Sims</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">14 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2f5512c6-603f-439c-9076-1d9b1e001259"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    153<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/59195dee-7fa9-4ea6-8a1e-10c30af75fca.jpg?d=140x140"
                      alt="Photo of Elias Talvitie"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/fi.svg"
                      alt="FI flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Elias Talvitie</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">13 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/88362575-bb8c-4e46-87a5-1a805009d577"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    154<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f632dc46-7988-46ba-be3e-b7b51f97ddae.jpg?d=140x140"
                      alt="Photo of Daniel Perkusic"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                      alt="DE flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Daniel Perkusic</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">13 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a7999c22-bbee-4a44-991f-ffca113a2b3c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    155<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d77a4e88-2adb-4b03-afda-5f69b6cdbeae.jpg?d=140x140"
                      alt="Photo of Sondre Sagstuen"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                      alt="NO flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Sondre Sagstuen</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">13 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/36289477-9828-4a28-97c0-13d2616f0142"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    156<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/ff9be168-10f3-4eea-9c24-6afd8252ad12.jpg?d=140x140"
                      alt="Photo of Charles Hayward"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Charles Hayward</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">13 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/acff283a-c6a3-4018-9adc-0228eb4f6304"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    157<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/8131202c-8a8b-4216-832a-91a680af8d87.jpg?d=140x140"
                      alt="Photo of Gytis Lazauninkas"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lt.svg"
                      alt="LT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Gytis Lazauninkas</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/c42bcae6-a3eb-40d8-af55-905a86e03d95"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    158<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="/dist/static/assets/defaultAvatar.8b96465bb2a46e6cad1269f945fdcf6d.png"
                      alt="Photo of Akin Tuna"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Akin Tuna</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/df9716a0-771c-444c-89bc-b672b1e4d3c5"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    159<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f93dcfd2-e059-439e-94ff-8cbb19d8cff9.jpg?d=140x140"
                      alt="Photo of Unlu Sinan"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Unlu Sinan</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/f0f93e9e-8831-48f4-9740-39fe07bcbd83"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    160<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1b00fadb-356b-4b3e-bf74-6ff1a0fdfd45.jpg?d=140x140"
                      alt="Photo of Ashkan Fattahi"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ir.svg"
                      alt="IR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ashkan Fattahi</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/0e4ae30f-b091-471c-9c8b-51665dc197f3"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    161<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/165cfb7a-d616-4a5c-91b0-fc1eb4251d65.png?d=140x140"
                      alt="Photo of Nuri Hadioglu"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Nuri Hadioglu</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/16a20f8e-2a80-4bc7-9051-bab4004b7691"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    162<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/0fbc5cfa-62b9-4cf7-b3ef-832e06ae67cc.jpg?d=140x140"
                      alt="Photo of Matthias Lipp"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                      alt="AT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Matthias Lipp</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/1b78f978-b83e-42b4-ac54-e56b3cb313b1"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    163<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/672dcc99-fd84-4986-babb-917c2bf7460f.jpg?d=140x140"
                      alt="Photo of Andrea Ricci"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/it.svg"
                      alt="IT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Andrea Ricci</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/28d84631-75cd-483d-a49d-581ee5972439"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    164<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f59a76f6-5fbf-4bbf-b850-265238605a7b.jpg?d=140x140"
                      alt="Photo of Ugnius Simelionis"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/lt.svg"
                      alt="LT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Ugnius Simelionis</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/2a59c652-7f94-4626-a2f6-c4278d5e7fb8"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    165<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/7689f237-2d1f-4613-938e-081b869ae5d4.jpg?d=140x140"
                      alt="Photo of Aleksandr Pak"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/uz.svg"
                      alt="UZ flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Aleksandr Pak</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/31c2f050-a177-4346-bab7-ebdcbc2a03bb"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    166<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="/dist/static/assets/defaultAvatar.8b96465bb2a46e6cad1269f945fdcf6d.png"
                      alt="Photo of Hendra Adiputra Choandri"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/id.svg"
                      alt="ID flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">
                    Hendra Adiputra Choandri
                  </div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/5f3c7a10-f950-4372-9200-87f38b530968"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    167<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/d2860354-92f2-4e30-9f5e-e36fea7a47a9.jpg?d=140x140"
                      alt="Photo of Recep Aydemir"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Recep Aydemir</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/70eead28-7a90-4896-9483-d103041ce59d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    168<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/126e33fb-9761-4997-8568-1a8222ffed7b.jpg?d=140x140"
                      alt="Photo of Roqai Chaoui Mehdi"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ma.svg"
                      alt="MA flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Roqai Chaoui Mehdi</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/71f0584d-e8c5-42bb-979c-fc552a7a0f9a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    169<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/2f49ced4-1d59-4060-a015-4e953450de71.jpg?d=140x140"
                      alt="Photo of Arsenii Karmatckii"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Arsenii Karmatckii</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/8c03aa2f-d765-4d99-a58e-94d581e9a740"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    170<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/72eaa43a-853d-4bd9-968f-71a0439963ff.jpg?d=140x140"
                      alt="Photo of Martin Modena"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/it.svg"
                      alt="IT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Martin Modena</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/9bfd9e30-4ac1-45a4-b481-fac1d95b7314"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    171<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c07b6678-af3a-4bea-b141-f262bacb120b.jpg?d=140x140"
                      alt="Photo of Koray Korkmaz"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                      alt="TR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Koray Korkmaz</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/acd67554-73d5-4a0b-bb40-2cad95bf8f0d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    172<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c3cab1b7-8f35-4a62-bdb3-4d55422be022.jpg?d=140x140"
                      alt="Photo of Daniel Rezaei"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                      alt="AT flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Daniel Rezaei</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/c721b3c6-c02d-4452-a84a-34843952ddca"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    173<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/33497ac4-f24d-4d91-8d60-1ff524e63d2a.jpg?d=140x140"
                      alt="Photo of Bayar Saran"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/mn.svg"
                      alt="MN flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Bayar Saran</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/cc593f52-c269-4eb0-b933-1572cba4438c"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    174<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/f7e82675-57cd-42a1-93b8-ef01aa3f043c.png?d=140x140"
                      alt="Photo of Aleksandr Zubov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Aleksandr Zubov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">12 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/a142b2f4-d0a7-4437-a062-a0c9d12df9b1"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    175<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/29d0bd34-4cba-4f13-807d-1a9315c12b4b.jpg?d=140x140"
                      alt="Photo of Yu Feng"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                      alt="GB flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Yu Feng</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">11 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/feb62de5-530b-46e4-9d74-9c10badf2c83"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    176<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/5013b569-6a20-4615-9bb4-76bd0d896bda.jpg?d=140x140"
                      alt="Photo of Felipe Ramos"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                      alt="BR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Felipe Ramos</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">11 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/45a7229b-9b3b-4e92-9d38-5f56d3281dd7"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    177<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/120d51b6-f093-4f27-8328-3ffcc08e3386.jpg?d=140x140"
                      alt="Photo of Pete Chen"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/tw.svg"
                      alt="TW flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Pete Chen</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">10 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/36a5dd33-3092-4c11-9068-7b3364aa9e82"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    178<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/07553de8-2f9a-49db-a1a5-ad30a6ab3033.jpg?d=140x140"
                      alt="Photo of Tossapat Chunharas"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                      alt="TH flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Tossapat Chunharas</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">9 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/b08e4120-1d1d-4bed-92d5-5be28536270b"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    179<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/6f69ea1d-da5b-42f6-804c-d6c6174be0fa.jpg?d=140x140"
                      alt="Photo of Maxim Kolosov"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                      alt="RU flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Maxim Kolosov</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">8 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/ebcd5a7c-9dab-45df-b333-bff5c190ff8d"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    180<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/740b4b80-771e-4be7-abc5-e064bd951ab2.jpg?d=140x140"
                      alt="Photo of Cary Katz"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Cary Katz</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">8 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/264919f9-832f-4e2d-867e-0df701fe2944"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    181<div className="css-1c88nb8-positionSuffix">st</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/c43856a5-42d4-42dd-b145-6f2dd2198323.jpg?d=140x140"
                      alt="Photo of Jose Barbero"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/ar.svg"
                      alt="AR flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jose Barbero</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">8 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/402652aa-a350-465d-878d-0b69541700ca"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    182<div className="css-1c88nb8-positionSuffix">nd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/0593266e-508e-464e-bf1c-116e7cd6a66e.jpg?d=140x140"
                      alt="Photo of Reid Liew"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                      alt="MY flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Reid Liew</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">8 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/6216664a-93ef-4933-b887-083de32ff45a"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    183<div className="css-1c88nb8-positionSuffix">rd</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://tritonpoker.plus/dist/static/assets/defaultAvatar.8b96465bb2a46e6cad1269f945fdcf6d.png"
                      alt="Photo of Cindy Tanjaya"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/id.svg"
                      alt="ID flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Cindy Tanjaya</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">7 Pts</div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://tritonpoker.plus/player/eb9c4464-62f6-4502-957b-df258b8f0ade"
            >
              <div className="css-53pp60-PlayerRowWithPoints">
                <div className="css-1wcczvw-content">
                  <div className="css-cxlj2c-position">
                    184<div className="css-1c88nb8-positionSuffix">th</div>
                  </div>
                  <div className="css-12tat42-imageWrapper-PlayerPhoto">
                    <img
                      src="https://prod-images.tritonpoker.plus/player-photos/1f9ceb26-e7bf-45f9-96a9-eab7e3ed1a67.jpg?d=140x140"
                      alt="Photo of Jeff Gross"
                      className="css-183zme4-image-PlayerPhoto"
                    />
                    <img
                      src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                      alt="US flag"
                      className="css-1mwnuku-flag-PlayerPhoto"
                    />
                  </div>
                  <div className="css-13f55rq-name">Jeff Gross</div>
                </div>
                <div className="css-1pygiur-rankingPointsContainer">
                  <div className="css-ltbn8k-rankingPoints">7 Pts</div>
                </div>
              </div>
            </a>
          </div>
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
