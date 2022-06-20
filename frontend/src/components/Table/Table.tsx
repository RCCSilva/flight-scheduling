import Link from 'next/link'
import * as S from './Table.styles'

type Header = {
  key: string
  label: string
}

type ItemProps = {
  id: string
  href?: string
}

export type TableProps = {
  columns: Header[]
  items: ({ [key: string]: React.ReactNode } & ItemProps)[]
}

const Table = ({ columns, items }: TableProps) => (
  <S.Wrapper>
    <thead>
      <S.TableHeaderRow>
        {columns.map((column) => (
          <S.TableHeaderValue key={column.key}>
            {column.label}
          </S.TableHeaderValue>
        ))}
      </S.TableHeaderRow>
    </thead>
    <S.TableBody>
      {items.map((item) =>
        item.href ? (
          <Link href={item.href} key={item.id}>
            <S.TableBodyRow isLink>
              {columns.map((column) => (
                <S.TableBodyValue key={column.key}>
                  {item[column.key]}
                </S.TableBodyValue>
              ))}
            </S.TableBodyRow>
          </Link>
        ) : (
          <S.TableBodyRow>
            {columns.map((column) => (
              <S.TableBodyValue key={column.key}>
                {item[column.key]}
              </S.TableBodyValue>
            ))}
          </S.TableBodyRow>
        )
      )}
    </S.TableBody>
  </S.Wrapper>
)

export default Table
