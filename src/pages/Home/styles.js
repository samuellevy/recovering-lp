import styled from "styled-components";

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
  background-color: tomato;
  height: 100px;
  width: 50%;
`;
export const RightBlock = styled.div`
  background-color: darkblue;
  height: 100px;
  width: 50%;
`;

export const Title = styled.h1``;
