import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from './SearchForm'

const onCahnge = jest.fn()
const onKeyDown = jest.fn()
const value = 'Username'

describe('Search form component', () => {
  it('Form renders', () => {
    render(
      <SearchForm onChange={onCahnge} onKeyDown={onKeyDown} value={value} />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Form empty renders', () => {
    render(
      <SearchForm onChange={onCahnge} onKeyDown={onKeyDown} value={value} />
    )

    userEvent.type(screen.getByRole('textbox'), 'fruit')

    expect(onCahnge).toHaveBeenCalledTimes(5)
  })
})
