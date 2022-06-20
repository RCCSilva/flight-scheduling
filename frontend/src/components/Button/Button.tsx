import * as S from './Button.styles'

export type ButtonProps = {
  children: React.ReactNode
  as?: React.ElementType
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Button
