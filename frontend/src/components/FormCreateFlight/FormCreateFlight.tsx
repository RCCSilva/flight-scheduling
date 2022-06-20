import Button from 'components/Button'
import DropdownField from 'components/DropdownField'
import Heading from 'components/Heading'
import { FormEventHandler, useState } from 'react'
import * as S from './FormCreateFlight.styles'

const options = [
  {
    value: '1',
    label: 'SBPT',
  },
]

const FormCreateFlight = () => {
  const [fromOptions, setFromOptions] = useState<typeof options>([])
  const [toOptions, setToOptions] = useState<typeof options>([])
  const [aircraftOptions, setAircraftOptions] = useState<typeof options>([])

  const [aircraft, setAircraft] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
  }

  const handleFromInputChange = (value: string) => {
    setFromOptions(options)
  }

  const handleFromOnSearchTextChange = (value: string) => {
    setFromOptions(options)
  }

  const handleToOnSearchTextChange = (value: string) => {
    setToOptions(options)
  }

  const handleAircraftOnSearchTextChange = (value: string) => {
    setAircraftOptions(options)
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <Heading>Create Flight</Heading>
        <DropdownField
          name="from"
          label="From"
          onInputChange={handleFromInputChange}
          onSearchTextChange={handleFromOnSearchTextChange}
          options={fromOptions}
        />
        <DropdownField
          name="to"
          label="To"
          onInputChange={handleFromInputChange}
          onSearchTextChange={handleToOnSearchTextChange}
          options={toOptions}
        />
        <DropdownField
          name="aircraft"
          label="Aircraft"
          onInputChange={handleFromInputChange}
          onSearchTextChange={handleAircraftOnSearchTextChange}
          options={aircraftOptions}
        />
        <Button>Create</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormCreateFlight
