import { ContainerButton, variantToColor, variantToSize } from "./styles";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "primaryLarge" | "primaryMedium" | "primarySmall";
  children: string;
}

function Button({
  variant = "primary",
  size = "primaryLarge",
  children,
}: ButtonProps) {
  const { bgColor, hover, color, borderColor } = variantToColor[variant];
  const { height, width } = variantToSize[size];

  return (
    <>
      <ContainerButton
        bgColor={bgColor}
        bColor={borderColor}
        color={color}
        hoverBgColor={hover.bgColor}
        hoverColor={hover.color}
        height={height}
        width={width}
      >
        {children}
      </ContainerButton>
    </>
  );
}

export default Button;
