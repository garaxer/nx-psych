import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template: 'hero hero' 'leftContent rightTop' 'leftContent rightMiddle' 'leftContent rightBottom' 'footer footer';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content min-content 1fr;
  grid-gap: 1rem;
  height: 100vh;
  width: 100vw;
`;

const Hero = styled.div`
  grid-area: hero;
`;
const LeftContent = styled.div`
  grid-area: leftContent;
`;
const RightTop = styled.div`
  grid-area: rightTop;
`;
const RightMiddle = styled.div`
  grid-area: rightMiddle;
`;
const RightBottom = styled.div`
  grid-area: rightBottom;
`;
const Footer = styled.div`
  grid-area: footer;
`;

export const AppLayout = Object.assign(Root, {
  Hero,
  LeftContent,
  RightTop,
  RightMiddle,
  RightBottom,
  Footer,
});

export default AppLayout;
