import * as S from "@/components/common/button/button.style";

interface ButtonProps {
  children: string;
  onClick: any;
  width?: string;
  height?: string;
  buttonColor?: string;
  fontSize?: string;
  fontColor?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
}

export default function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <S.Button onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}
