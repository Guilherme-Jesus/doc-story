import styled from "styled-components";

export const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;
export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">...</CloseIconWrapper>
);
