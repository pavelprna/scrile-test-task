import { FC } from 'react'
import { User } from '../../types'
import { UserCard } from '../UserCard/UserCard'
import './UserList.css'

type UserListProps = {
  users: User[]
  onClick: (name: string) => void
}

export const UserList: FC<UserListProps> = ({ users, onClick }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li
          className="user-list__item"
          onClick={() => onClick(user.name)}
          key={user.id}
        >
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  )
}
