import styled from "styled-components";
import { AppColors, size } from "../styles/utils";

interface ContainerProps {
  bgColor: string;
  bColor: string;
  color: string;
  hoverBgColor: string;
  hoverColor: string;
  width: string;
  height: string;
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

interface ISizeProps {
  primaryLarge: {
    width: string;
    height: string;
  };
  primaryMedium: {
    width: string;
    height: string;
  };
  primarySmall: {
    width: string;
    height: string;
  };
  secondaryLarge: {
    width: string;
    height: string;
  };
  secondaryMedium: {
    width: string;
    height: string;
  };
  secondarySmall: {
    width: string;
    height: string;
  };
  tertiaryLarge: {
    width: string;
    height: string;
  };
  tertiaryMedium: {
    width: string;
    height: string;
  };
  tertiarySmall: {
    width: string;
    height: string;
  };
  outlinedLarge: {
    width: string;
    height: string;
  };
  outlinedMedium: {
    width: string;
    height: string;
  };
  outlinedSmall: {
    width: string;
    height: string;
  };
}

export const variantToSize: ISizeProps = {
  primaryLarge: {
    width: size.primaryLarge.width,
    height: size.primaryLarge.height,
  },
  primaryMedium: {
    width: size.primaryMedium.width,
    height: size.primaryMedium.height,
  },
  primarySmall: {
    width: size.primarySmall.width,
    height: size.primarySmall.height,
  },
  secondaryLarge: {
    width: size.secondaryLarge.width,
    height: size.secondaryLarge.height,
  },
  secondaryMedium: {
    width: size.secondaryMedium.width,
    height: size.secondaryMedium.height,
  },
  secondarySmall: {
    width: size.secondarySmall.width,
    height: size.secondarySmall.height,
  },
  tertiaryLarge: {
    width: size.tertiaryLarge.width,
    height: size.tertiaryLarge.height,
  },
  tertiaryMedium: {
    width: size.tertiaryMedium.width,
    height: size.tertiaryMedium.height,
  },
  tertiarySmall: {
    width: size.tertiarySmall.width,
    height: size.tertiarySmall.height,
  },
  outlinedLarge: {
    width: size.outlinedLarge.width,
    height: size.outlinedLarge.height,
  },
  outlinedMedium: {
    width: size.outlinedMedium.width,
    height: size.outlinedMedium.height,
  },
  outlinedSmall: {
    width: size.outlinedSmall.width,
    height: size.outlinedSmall.height,
  },
};

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

export const ContainerButton = styled.button<ContainerProps>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 16px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  left: 20px;
  top: 20px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
`;
