import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { User } from '../../types'
import { api } from '../../utils/Api'
import SearchForm from '../SearchForm/SearchForm'
import { UserList } from '../UserList/UserList'

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(true)

  useState(() => {
    if (searchValue.length === 0 && users[0]) {
      setUsers([])
    }
    console.log(searchValue.length, users.length)
  })

  const setAvatars = ({
    users,
    avatars,
  }: {
    users: User[]
    avatars: any[]
  }) => {
    users.map((user) => {
      for (let i = 0; i < avatars.length; i++) {
        if (user.id === avatars[i].id) {
          user.avatar = avatars[i].thumbnailUrl
          break
        }
      }
      return user
    })
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
    setIsLoaded(false)
    Promise.all([api.getAllUsers(), api.getAvatars()]).then(
      ([users, avatars]) => {
        setAvatars({ users, avatars })
        setIsLoaded(true)
        setUsers(users)
      }
    )
  }

  return (
    <>
      <header className="header">
        <SearchForm value={searchValue} onChange={handleChange} />
      </header>
      <main className="main">
        {isLoaded ? users[0] && <UserList users={users} /> : 'loaded...'}
      </main>
    </>
  )
}

export default App
