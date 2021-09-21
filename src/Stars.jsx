import styled from '@emotion/styled';

const DEFAULT_NUM_STARS = 200;
const DEFAULT_STAR_SIZE = 1;

const generateStar = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 200);
  return `${x}vw ${y}vh #FFF`;
};

const Stars = styled.div`
  width: ${(props) => props.size ?? DEFAULT_STAR_SIZE}px;
  height: ${(props) => props.size ?? DEFAULT_STAR_SIZE}px;
  box-shadow: ${(props) => Array.from(Array(props.num ?? DEFAULT_NUM_STARS), () => generateStar()).join(',')};
`;

export default Stars;
