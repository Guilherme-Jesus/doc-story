import styled, { css } from "styled-components";
import { defaultTheme, typeScale } from "../../utils";
export const StyledButton = styled.button<{
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  warning?: boolean;
  primaryButtonWarning?: boolean;
  secondaryButtonWarning?: boolean;
  error?: boolean;
  primaryButtonError?: boolean;
  secondaryButtonError?: boolean;
  success?: boolean;
  primaryButtonSuccess?: boolean;
  secondaryButtonSuccess?: boolean;
}>`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  ${({ small }) =>
    small &&
    css`
      font-size: ${typeScale.helperText};
      padding: 8px;
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `}

    ${({ medium }) =>
    medium &&
    css`
      font-size: ${typeScale.paragraph};
      padding: 12px 24px;
    `} 
    
    
    ${({ warning }) =>
    warning &&
    css`
      background-color: ${(props) => props.theme.status.warningColor};
      color: ${(props) => props.theme.textColorInverted};

      &:hover,
      &:focus {
        background-color: ${(props) => props.theme.status.warningColorHover};
        outline: 3px solid ${(props) => props.theme.status.warningColorHover};
        outline-offset: 2px;
      }

      &:active {
        background-color: ${(props) => props.theme.status.warningColorActive};
      }
    `}

    ${({ primaryButtonWarning }) =>
    primaryButtonWarning &&
    css`
      background-color: ${(props) => props.theme.status.warningColor};
      color: ${defaultTheme.textColorInverted};
    `}  
      
      ${({ secondaryButtonWarning }) =>
    secondaryButtonWarning &&
    css`
      border: 2px solid ${(props) => props.theme.status.warningColor};
    `}   
      
      ${({ error }) =>
    error &&
    css`
      background-color: ${(props) => props.theme.status.errorColor};
      color: ${(props) => props.theme.textColorInverted};

      &:hover {
        background-color: ${(props) => props.theme.status.errorColorHover};
      }

      &:active {
        background-color: ${(props) => props.theme.status.errorColorActive};
      }
    `}
  ${({ primaryButtonError }) =>
    primaryButtonError &&
    css`
      background-color: ${defaultTheme.status.errorColor};
      color: ${defaultTheme.textColorInverted};
    `}
  ${({ secondaryButtonError }) =>
    secondaryButtonError &&
    css`
      border: 2px solid ${(props) => props.theme.status.warningColor};
    `}
  ${({ success }) =>
    success &&
    css`
      background-color: ${(props) => props.theme.status.successColor};
      color: ${(props) => props.theme.textColorInverted};

      &:hover {
        background-color: ${(props) => props.theme.status.successColorHover};
      }

      &:active {
        background-color: ${(props) => props.theme.status.successColorActive};
      }
    `}
  ${({ primaryButtonSuccess }) =>
    primaryButtonSuccess &&
    css`
      background-color: ${defaultTheme.status.successColor};
      color: ${defaultTheme.textColorInverted};
    `}
  ${({ secondaryButtonSuccess }) =>
    secondaryButtonSuccess &&
    css`
      border: 2px solid ${(props) => props.theme.status.warningColor};
    `}
`;
