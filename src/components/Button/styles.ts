import styled from "styled-components";
import { AppColors } from "../styles/utils";

interface ContainerProps {
  bgColor: string;
  bColor: string;
  color: string;
  hoverBgColor: string;
  hoverColor: string;
}

interface IVariantProps {
  primary: {
    bgColor: string;
    borderColor: string;
    color: string;
    hover: {
      bgColor: string;
      color: string;
    };
  };
  secondary: {
    bgColor: string;
    borderColor: string;
    color: string;
    hover: {
      bgColor: string;
      color: string;
    };
  };
  outline: {
    bgColor: string;
    color: string;
    borderColor: string;
    hover: {
      bgColor: string;
      color: string;
    };
  };
}

export const variantToColor: IVariantProps = {
  primary: {
    bgColor: AppColors.primaryColor,
    borderColor: AppColors.neutralColorVariant,
    color: AppColors.neutralColorVariant,
    hover: {
      bgColor: AppColors.neutralColorVariant,
      color: AppColors.neutralColorVariant,
    },
  },
  secondary: {
    bgColor: AppColors.secondaryColor,
    borderColor: AppColors.secondaryColor,
    color: AppColors.neutralColorVariant,
    hover: {
      bgColor: AppColors.neutralColorVariant,
      color: AppColors.neutralColorVariant,
    },
  },
  outline: {
    bgColor: "transparent",
    color: AppColors.secondaryColor,
    borderColor: "none",
    hover: {
      bgColor: AppColors.secondaryColor,
      color: AppColors.neutralColorVariant,
    },
  },
};

export const ButtonLarge = styled.button<ContainerProps>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 16px;
  width: 360px;
  height: 64px;
  left: 20px;
  top: 20px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
`;

export const ButtonMedium = styled.button<ContainerProps>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  height: 48px;
  width: 264px;
  left: 20px;
  top: 108px;
  border-radius: 8px;
  padding: 16px;
  border: none;
`;

export const ButtonSmall = styled.button<ContainerProps>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 16px;
  width: 168px;
  height: fit-content;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
`;
