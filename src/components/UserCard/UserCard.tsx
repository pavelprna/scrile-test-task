import { FC } from 'react'
import { User } from '../../types'

type UserCardProps = {
  user: User
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-list__item">
      <img src="" alt="" srcSet={user.avatar} />
    </div>
  )
}
