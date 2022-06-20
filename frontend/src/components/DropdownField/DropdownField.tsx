import { useCallback, useState } from 'react'
import { ChangeEventHandler } from 'react'
import * as S from './DropdownField.styles'

type DropdownOptions = {
  value: string
  label: string
}

export type DropdownFieldProps = {
  name: string
  label: string
  options?: DropdownOptions[]
  onSearchTextChange: (value: string) => void
  onInputChange: (value: string) => void
}

const DropdownField = ({
  name,
  label,
  options,
  onInputChange,
  onSearchTextChange,
}: DropdownFieldProps) => {
  const [searchTextValue, setSearchTextValue] = useState('')
  const [selected, setSelected] = useState(false)

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.currentTarget.value
    setSelected(false)
    setSearchTextValue(newValue)
    onSearchTextChange(newValue)
  }

  const handleInputSelect = (value: string, label: string) => {
    setSelected(true)
    setSearchTextValue(label.toString())
    onInputChange(value)
  }

  const shouldRenderOptions = useCallback(() => {
    if (selected) {
      return false
    }

    if (!options) {
      return false
    }

    if (options.length < 1) {
      return false
    }

    return true
  }, [options, selected])

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={name}
        name={name}
        value={searchTextValue}
        onChange={handleSearchTextChange}
        showingOptions={shouldRenderOptions()}
      />
      {shouldRenderOptions() && (
        <S.Options>
          {options?.map((option) => (
            <S.Option
              key={option.value}
              onClick={() => handleInputSelect(option.value, option.label)}
            >
              {option.label}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Wrapper>
  )
}

export default DropdownField
