import styled from 'styled-components';

export const FormWrapper = styled.form.attrs((props) => ({
  autoComplete: 'off',
}))`
  width: 51rem;
  background: #ffffff 0% 0%;
  box-shadow: 0px 3px 6px #00000029;
  padding: 6rem 4.95rem 5.8rem 4.95rem;
  border: 1px solid #f2f2f2;
`;

export const FormTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 5.1rem;
  color: #000000;
  margin-bottom: 2.3rem;
  text-align: center;
`;

export const FormControl = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 0.5rem;

  &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }

  &:last-of-type {
    margin-bottom: 4.2rem;
  }
`;
