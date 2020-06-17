import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #dfe1e5;
  /* margin-bottom: 24px; */
  background: #fff;

  ${({ isSticked }) =>
    isSticked
      ? css`
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        `
      : null};
`;
