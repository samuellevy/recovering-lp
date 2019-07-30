import React, { Component } from "react";
import {
  Container,
  Header,
  Banner,
  Logo,
  Content,
  Block,
  LeftBlock,
  RightBlock,
  TitleBlock,
  Title,
  Subtitle,
  Text,
  ProductsBox,
  ProductItem,
  ProductNameBox,
  ProductType,
  ProductName
} from "./styles";

import bannerImg from "../../assets/images/banner.png";
import logoImg from "../../assets/images/logo.png";
import enfeiteImg from "../../assets/images/enfeite-piso.png";

import shape1Img from "../../assets/images/shape-1.png";
import shape2Img from "../../assets/images/shape-2.png";
import shape3Img from "../../assets/images/shape-3.png";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Banner src={bannerImg} alt="" />
          <Logo src={logoImg} alt="" />
        </Header>

        <Content>
          <Block padding={70}>
            <LeftBlock>
              <TitleBlock>
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
          </Block>

          <Block>
            <TitleBlock flex={1} inverse={true}>
              <Title left={70}>Produtos</Title>
              <Subtitle>Linhas de</Subtitle>
            </TitleBlock>
          </Block>

          <ProductsBox>
            <ProductItem>
              <img src={shape1Img} alt="" />
              <ProductNameBox align={"right"}>
                <ProductType>Pisos</ProductType>
                <ProductName>Vinículos</ProductName>
              </ProductNameBox>
            </ProductItem>

            <ProductItem>
              <img src={shape2Img} alt="" />
              <ProductNameBox>
                <ProductType>Pisos</ProductType>
                <ProductName>Laminados</ProductName>
              </ProductNameBox>
            </ProductItem>

            <ProductItem>
              <img src={shape3Img} alt="" />
              <ProductNameBox>
                <ProductType>Pisos</ProductType>
                <ProductName>Parquet</ProductName>
              </ProductNameBox>
            </ProductItem>
          </ProductsBox>
        </Content>
      </Container>
    );
  }
}
