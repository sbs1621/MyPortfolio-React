import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Stack } from "react-bootstrap";
import Typed from "react-typed";
import { Carousel } from "react-bootstrap";

import secondProjectImage from "./images/2ndImage.jpeg";

import gitHubImage from "./images/git.png";
import notionImage from "./images/notion.jpg";
import personImage from "./images/person.svg";
import calenderImage from "./images/calendar.svg";
import locateImage from "./images/locate.svg";
import callImage from "./images/call.svg";
import emailImage from "./images/email.svg";
import schoolImage from "./images/school.svg";
import javaImage from "./images/JavaImage.png";
import nodeImage from "./images/NodeImage.png";
import postgreSqlImage from "./images/PostgreSQLImage.png";
import springImage from "./images/SpringImage.png";
import htmlImage from "./images/HTMLImage.png";
import cssImage from "./images/CSSImage.png";
import jsImage from "./images/JSImage.png";
import reactImage from "./images/ReactImage.png";
import gitImage from "./images/GitImage.png";
import githubImage from "./images/GitHubImage.png";
import dockerImage from "./images/DockerImage.png";
import homeIOTImage from "./images/HomeIOT.png";
import casinoJ from "./images/CasinoJ.png";
import portfolio from "./images/portfolio.png";
import React, { useState, useEffect, cloneElement } from "react";

function App() {
  return (
    <>
      <header className="header" style={{ fontFamily: "어그로" }}>
        <nav
          id="navbar-example2"
          class="navbar navbar-light bg-light px-0 fixed-top justify-content-center"
        >
          <a class="navbar-brand" href="#">
            <h5 style={{ paddingRight: "200px" }}>Byeongseok's Portfolio</h5>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">
                <h4 class="link-warning">Home</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">
                <h4 class="link-warning">About Me</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">
                <h4 class="link-warning">Skills</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">
                <h4 class="link-warning">Project</h4>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="scroll-container">
        <div style={{ backgroundColor: "black", marginTop: "70px" }}>
          <h4 id="scrollspyHeading1"></h4>
          <h1 className={"home"}>
            <br></br>
            <Typed
              strings={[
                "저의 포트폴리오에 오신 것을 환영합니다.",
                "Java와 Spring을 공부하여",
                "백엔드 개발자를 목표로 하는 성병석입니다.",
              ]}
              typeSpeed={60}
              backSpeed={30}
            />
          </h1>
        </div>
        <Stack style={{ backgroundColor: "white" }}>
          <h4 id="scrollspyHeading2"></h4>
          <br></br>
          <h1 className="aboutMe">About me</h1>
          <br></br>
          <div
            style={{
              textAlign: "center",
              fontFamily: "어그로",
              fontSize: "25px",
            }}
          >
            저는 힘든 상황에서 더욱 성장하게 합니다.<br></br>어려워도
            포기하지않는 것이 저의 장점입니다.
          </div>
          <Container
            style={{
              backgroundColor: "lightgrey",
              width: "80%",
              height: "50%",
              marginRight: "10%",
              marginTop: "2%",
              paddingBottom: "2%",
              borderRadius: "12px",
            }}
          >
            <Row
              style={{
                width: "100%",
              }}
            >
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={personImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Name</h4>
                    <h5 style={{ width: "300px" }}>성병석</h5>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={calenderImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Birth</h4>
                    <h5 style={{ width: "300px" }}>2000.1.19</h5>
                  </div>
                </Stack>
              </Col>
            </Row>

            <Row
              style={{
                width: "100%",
              }}
            >
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={locateImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Address</h4>
                    <h5 style={{ width: "300px" }}>
                      경상남도 창원시 마산합포구
                    </h5>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={callImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Phone</h4>
                    <h5 style={{ width: "300px" }}>010.1234.xxxx</h5>
                  </div>
                </Stack>
              </Col>
            </Row>
            <Row
              style={{
                width: "100%",
              }}
            >
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={emailImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Email</h4>
                    <h5 style={{ width: "300px" }}>abc1234@naver.com</h5>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack
                  direction="horizontal"
                  gap={4}
                  className="col-md-7 mx-auto"
                >
                  <img src={schoolImage} className={"profile"} />
                  <div>
                    <h4 style={{ width: "300px" }}>Education</h4>
                    <h5 style={{ width: "300px" }}>인제대 컴공 재학</h5>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
        </Stack>
        <div style={{ backgroundColor: "beige" }}>
          <h4 id="scrollspyHeading3"></h4>
          <br></br>
          <h1 className="skill">Skills</h1>

          <div className="skillContainer">
            <div
              style={{
                width: "30%",

                backgroundColor: "white",
                marginTop: "4%",
                marginLeft: "3%",
                paddingTop: "1%",
                textAlign: "center",
                borderRadius: "12px",
              }}
            >
              <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>
                Backend
              </h2>

              <img
                class="scale"
                src={javaImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              />
              <img
                class="scale"
                src={springImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
              <br></br>

              <img
                class="scale"
                src={nodeImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
              <img
                class="scale"
                src={postgreSqlImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
            </div>
            <div
              style={{
                width: "30%",

                backgroundColor: "white",
                marginTop: "4%",
                marginLeft: "3%",
                paddingTop: "1%",
                textAlign: "center",
                borderRadius: "12px",
              }}
            >
              <h2 style={{ paddingBottom: "10px" }}>Frontend</h2>

              <img
                class="scale"
                src={htmlImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              />
              <img
                class="scale"
                src={cssImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",

                  marginBottom: "10%",
                }}
              ></img>
              <br></br>
              <img
                class="scale"
                src={jsImage}
                style={{
                  width: "60px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
              <img
                class="scale"
                src={reactImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
            </div>
            <div
              style={{
                width: "30%",

                backgroundColor: "white",
                marginTop: "4%",
                marginLeft: "3%",
                paddingTop: "1%",
                textAlign: "center",
                borderRadius: "12px",
              }}
            >
              <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>
                Control
              </h2>

              <img
                class="scale"
                src={githubImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              />
              <img
                class="scale"
                src={gitImage}
                style={{
                  width: "80px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
              ></img>
              <br></br>
              <img
                class="scale"
                src={dockerImage}
                style={{
                  width: "80px",
                }}
              ></img>
            </div>
            <div
              style={{
                width: "100%",
                height: "27%",
                marginTop: "3%",
                marginLeft: "3%",
                marginBottom: "3%",
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "1%",
              }}
            >
              <h4>other than</h4>
              <p>아두이노 코딩 가능</p>
              <p>MS데이터 전문가 자격증 보유</p>
              <p>일본어 마스터</p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "pink" }}>
          <h4 id="scrollspyHeading4"></h4>
          <br></br>
          <h1 className="project">Project</h1>

          <Carousel
            indicators
            style={{
              backgroundColor: "black",
              marginTop: "3%",
              marginLeft: "15%",
              marginRight: "15%",
              borderRadius: "12px",
              height: "600px",
            }}
          >
            <Carousel.Item>
              <div
                style={{
                  width: "30%",
                  marginLeft: "35%",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "235px",
                    }}
                    src={casinoJ}
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title" className="projectCardTitle">
                      Casino J
                    </h5>
                    <p class="card-text" className="projectCard">
                      자바 스윙을 이용한 카드게임<br></br> #Java #Swing #SQLite
                    </p>
                    <a href="https://github.com/jadru/Casino-J" class="btn ">
                      <img
                        src={gitHubImage}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  width: "30%",
                  marginLeft: "35%",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "235px",
                    }}
                    src={secondProjectImage}
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title" className="projectCardTitle">
                      E105
                    </h5>
                    <p class="card-text" className="projectCard">
                      인제대학교 컴공 동아리방 관리 시스템<br></br>
                      #Java #Spring #PostgreSQL #Docker
                    </p>
                    <a
                      href="https://github.com/inje-megabrain/E105"
                      class="btn "
                    >
                      <img
                        src={gitHubImage}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  width: "30%",
                  marginLeft: "35%",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "235px",
                    }}
                    src={portfolio}
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title" className="projectCardTitle">
                      포트폴리오
                    </h5>
                    <p class="card-text" className="projectCard">
                      리액트를 이용한 포트폴리오<br></br>#React
                    </p>
                    <a
                      href="https://github.com/sbs1621/MyPortfolio-React"
                      class="btn "
                    >
                      <img
                        src={gitHubImage}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                    &nbsp;
                    <a
                      href="https://pacific-cicada-ac3.notion.site/004d916aa9b7460e8029dfb0ec26e1a7"
                      class="btn "
                    >
                      <img
                        src={notionImage}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  width: "30%",
                  marginLeft: "35%",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "235px",
                    }}
                    src={homeIOTImage}
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title" className="projectCardTitle">
                      HomeIOT
                    </h5>
                    <p class="card-text" className="projectCard">
                      아두이노를 이용한 HomeIOT WebServer<br></br>#Arduino #C
                    </p>
                    <a href="https://github.com/sbs1621/HomeIOT" class="btn ">
                      <img
                        src={require("./images/git.png")}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <footer class="py-1 my-1">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a
                href="https://github.com/sbs1621"
                class="nav-link px-2 text-muted"
              >
                GitHub
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                notion
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                instagram
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                facebook
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">
            &copy; 2021 Byeongseok Seong. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
