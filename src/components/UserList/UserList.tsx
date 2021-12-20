import { FC } from 'react'
import { User } from '../../types'
import { UserCard } from '../UserCard/UserCard'
import './UserList.css'

type UserListProps = {
  users: User[]
  onClick: (name: string) => void
  cursor: number
}

export const UserList: FC<UserListProps> = ({ users, onClick, cursor }) => {
  if (!users.length) return null

  return (
    <ul className="user-list">
      {users.map((user, i) => (
        <li
          className={`user-list__item ${
            cursor === i + 1 ? 'user-list__item_active' : ''
          }`}
          onClick={() => onClick(user.name)}
          key={user.id}
        >
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  )
}
