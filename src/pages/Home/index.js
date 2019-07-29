import React, { Component } from "react";
import { Container, Header, Banner } from "./styles";

import bannerImg from "../../assets/images/banner.png";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Banner src={bannerImg} alt="" />
        </Header>
      </Container>
    );
  }
}
