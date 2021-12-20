import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserList } from './UserList'

const users = [{ id: 2, name: 'John', username: 'Doe' }]
const onClick = jest.fn()

describe('List component', () => {
  it('List renders', () => {
    render(<UserList users={users} onClick={onClick} cursor={0} />)

    expect(screen.getByText('John')).toBeInTheDocument()
  })

  it('List empty renders', () => {
    render(<UserList users={[]} onClick={onClick} cursor={0} />)

    expect(screen.queryByRole('list')).toBeNull()
  })

  it('Click by user card', () => {
    render(<UserList users={users} onClick={onClick} cursor={0} />)

    userEvent.click(screen.getByRole('listitem'))

    expect(onClick).toHaveBeenCalled()
  })
})
