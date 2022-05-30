import React from "react";
import "./Main.scss";
import HeaderPage from "../header-page/HeaderPage";
import About from "../about/About";
import Footer from "../footer/Footer";
import FaqPage from "../faq/Faq-page";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  FadeIn,
  batch,
  MoveIn,
} from "react-scroll-motion";
const Main = () => {
  return (
    <div className="Main">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(FadeIn(0.25, 1))}>
            <HeaderPage />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(FadeIn(0.25, 1), MoveIn(0, 200))}>
            <About />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(FadeIn(0.15, 1), MoveIn(0, 200))}>
            <FaqPage />
          </Animator>
        </ScrollPage>

        <Footer />
      </ScrollContainer>
    </div>
  );
};

export default Main;
