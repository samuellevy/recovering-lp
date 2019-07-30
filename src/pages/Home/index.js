import React, { Component } from "react";
import {
  Container,
  Header,
  Banner,
  Logo,
  Content,
  LeftBlock,
  RightBlock,
  TitleBlock,
  Title,
  Subtitle,
  Text
} from "./styles";

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
          <LeftBlock>
            <TitleBlock padding={70}>
              <Title>Expertise</Title>
              <Subtitle left={55}>Excelência</Subtitle>
            </TitleBlock>
            <Text>
              Unindo a excelência dos melhores fornecedores <br />
              internacionais com a expertise de quem atua <br />
              há 22 anos no mercado de revestimentos, a <br />
              Recovering conta com uma seleção premium
              <br />
              de produtos e uma orientação precisa para
              <br />
              você cobrir o seu espaço de qualidade.
            </Text>
          </LeftBlock>
          <RightBlock>b</RightBlock>
        </Content>
      </Container>
    );
  }
}
