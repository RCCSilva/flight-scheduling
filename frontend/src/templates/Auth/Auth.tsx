import * as S from './Auth.styles'

export type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => <S.Wrapper>{children}</S.Wrapper>

export default Auth
