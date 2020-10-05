import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const AuthPageWrapper = styled(PageWrapper)`
  background: transparent linear-gradient(180deg, #5ac8fa 0%, #ffffff00 75.5rem)
    0% 0%;
  opacity: 1;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 1.3rem;
  align-items: center;
  align-content: center;
  justify-items: center;
`;