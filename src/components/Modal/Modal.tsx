import { animated, config, useSpring } from "@react-spring/web";
import { Illustrations } from "../../assets/illustations";
import { PrimaryButton } from "../Button/ButtonStyled";
import { CloseIcon } from "../icons/CloseIcon";
import {
  CloseModalButton,
  ModalWrapper,
  SignUpHeader,
  SignUpText,
} from "./ModalStyled";

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export default function SignUpModal({ showModal, setShowModal }: ModalProps) {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-200%)`,
    config: config.molasses,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText> Sign up to get access! </SignUpText>
        <PrimaryButton>Sign Up</PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => console.log("You closed the modal!")}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
}
