import Sidebar from 'components/Sidebar'
import * as S from './AppContainer.styles'

type AppContainerProps = {
  children: React.ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => (
  <S.Wrapper>
    <Sidebar />
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default AppContainer
