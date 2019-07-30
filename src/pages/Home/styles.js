import styled from "styled-components";
import { colors } from "../../globals";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Banner = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  object-position: center;
`;

export const Logo = styled.img`
  position: absolute;
  left: 0;
  margin-top: 50px;
  margin-left: 14px;
`;

export const Content = styled.section``;

export const Block = styled.article`
  display: flex;
  flex-wrap: nowrap;
  padding: ${props => props.padding && props.padding}px 0 ${props => props.padding && props.padding - 15}px;
`;

export const LeftBlock = styled.div`
  min-height: 100px;
  width: 50%;
`;
export const RightBlock = styled.div`
  min-height: 100px;
  width: 50%;
  position: relative;
`;

export const FloorImg = styled.img`
  position: absolute;
  top: -337px;
  right: 0;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  flex: ${props => props.flex && props.flex} auto;
  flex-direction: ${props => props.inverse && "column-reverse"};
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 75px;
  line-height: 65px;
  padding-left: ${props => props.left && props.left}px;
`;

export const Subtitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 48px;
  padding-left: ${props => props.left && props.left}px;
  letter-spacing: 11px;
`;

export const Text = styled.p`
  font-family: "Merriweather", serif;
  font-style: italic;
  font-size: 24px;
  font-weight: 300;
  color: ${colors.lightgray};
  text-align: center;
`;

export const ProductsBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
`;

export const ProductItem = styled.div`
  width: 33%;
  position: relative;
  img {
    width: 90%;
  }
`;

export const ProductNameBox = styled.div`
  position: absolute;
  top: 110px;
  ${props => (props.align == "right" ? "right:50px" : "left:0")};
  ${props => props.align == "right" && "text-align:right"};
`;
export const ProductType = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 25px;
  padding: 0px 35px;
`;
export const ProductName = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 45px;
  line-height: 45px;
`;
