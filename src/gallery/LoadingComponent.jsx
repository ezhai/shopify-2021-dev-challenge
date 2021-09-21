import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Typography from '@mui/material/Typography';
import loading from '../assets/loading.gif';

const ellipsis = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 3rem;    
  }
`;

const LoadingContainer = styled.div`
  padding: 4rem;
`;

const LoadingText = styled(Typography)`
  &:after {
    content: "…";
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation : ${ellipsis} steps(4, end) 3s infinite;
  }
`;

const LoadingImage = styled.img`
  padding: 20px;
  height: 50vmin;
  width: 50vmin;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingText variant="h4">Loading images</LoadingText>
    <LoadingImage src={loading} alt="loading spinner" />
  </LoadingContainer>
);

export default Loading;
