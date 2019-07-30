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

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LeftBlock = styled.div`
  min-height: 100px;
  width: 50%;
`;
export const RightBlock = styled.div`
  background-color: darkblue;
  min-height: 100px;
  width: 50%;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  padding: ${props => props.padding && props.padding}px 0
    ${props => props.padding && props.padding - 15}px;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 75px;
  line-height: 65px;
`;

export const Subtitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 48px;
  padding-left: ${props => props.left && props.left}px;
  letter-spacing: 12px;
`;

export const Text = styled.p`
  font-family: "Merriweather", serif;
  font-style: italic;
  font-size: 24px;
  font-weight: 300;
  color: ${colors.lightgray};
  text-align: center;
`;
