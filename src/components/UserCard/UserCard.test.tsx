import { render, screen } from '@testing-library/react'
import { UserCard } from './UserCard'

const user = { id: 2, name: 'John', username: 'Doe' }

describe('Card component', () => {
  it('Card renders', () => {
    render(<UserCard user={user} />)

    expect(screen.getByText('John')).toBeInTheDocument()
  })
})
