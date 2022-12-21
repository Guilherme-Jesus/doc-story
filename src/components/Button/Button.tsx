import {
  ButtonLarge,
  ButtonMedium,
  ButtonSmall,
  variantToColor,
} from "./styles";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  children: string;
}

function Button({ variant = "primary", children }: ButtonProps) {
  const { bgColor, hover, color, borderColor } = variantToColor[variant];
  return (
    <>
      <ButtonLarge
        bgColor={bgColor}
        bColor={borderColor}
        color={color}
        hoverBgColor={hover.bgColor}
        hoverColor={hover.color}
      >
        {children}
      </ButtonLarge>
      <ButtonMedium
        bgColor={bgColor}
        bColor={borderColor}
        color={color}
        hoverBgColor={hover.bgColor}
        hoverColor={hover.color}
      >
        {children}
      </ButtonMedium>
      <ButtonSmall
        bgColor={bgColor}
        bColor={borderColor}
        color={color}
        hoverBgColor={hover.bgColor}
        hoverColor={hover.color}
      >
        {children}
      </ButtonSmall>
    </>
  );
}

export default Button;
