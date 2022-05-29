import React from "react";
import "./Faq-page.scss";
import Faq from "./Faq";
import { Container } from "semantic-ui-react";
const FaqPage = () => {
  return (
    <div className="FaqPage">
      <Container>
          <h1>FAQ - Frequently asked questions</h1>
        <Faq />
      </Container>
    </div>
  );
};

export default FaqPage;
