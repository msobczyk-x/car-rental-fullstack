import React from "react";
import "./Main.scss";
import HeaderPage from "../header-page/HeaderPage";
import About from "../about/About";
import FaqPage from "../faq/Faq-page";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  FadeIn,
  batch,
  MoveIn,
} from "react-scroll-motion";


import {motion} from 'framer-motion';
const Main = () => {
  return (
    <motion.div className="Main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
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
      </ScrollContainer>
    </motion.div>
  );
};

export default Main;
