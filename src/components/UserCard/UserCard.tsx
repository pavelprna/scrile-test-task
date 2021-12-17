import { FC } from 'react'
import { User } from '../../types'
import './UserCard.css'

type UserCardProps = {
  user: User
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <article className="user-list__item card">
      <img alt={user.name} srcSet={user.avatar} className="card__avatar" />
      <div className="card__info">
        <p className="card__name">{user.name}</p>
        <p className="card__username">@{user.username}</p>
      </div>
    </article>
  )
}
