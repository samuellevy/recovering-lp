import React, { Component } from "react";
import { Container, Header, Banner, Image, Content } from "./styles";

import bannerImg from "../../assets/images/banner.png";
import logoImg from "../../assets/images/logo.png";
import enfeiteImg from "../../assets/images/enfeite-piso.png";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Banner src={bannerImg} alt="" />
          <Image src={logoImg} alt="" />
        </Header>

        <Content>
          <aside>
            <h1>
              Expertise <small>Excelência</small>
            </h1>
          </aside>

          <aside>
            <h1>
              <img src={enfeiteImg} alt="" />
            </h1>
          </aside>
        </Content>
      </Container>
    );
  }
}
