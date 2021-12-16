import { FC } from 'react'
import { User } from '../../types'
import { UserCard } from '../UserCard/UserCard'

type UserListProps = {
  users: User[]
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}
