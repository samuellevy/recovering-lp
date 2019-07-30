import React, { Component } from "react";
import { Container, Header, Banner, Logo, Content, LeftBlock, RightBlock } from "./styles";

import bannerImg from "../../assets/images/banner.png";
import logoImg from "../../assets/images/logo.png";
import enfeiteImg from "../../assets/images/enfeite-piso.png";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Banner src={bannerImg} alt="" />
          <Logo src={logoImg} alt="" />
        </Header>

        <Content>
          <LeftBlock>a</LeftBlock>
          <RightBlock>b</RightBlock>
        </Content>
      </Container>
    );
  }
}
