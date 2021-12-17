import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react'
import { User, Photo } from '../../types'
import { api } from '../../utils/Api'
import SearchForm from '../SearchForm/SearchForm'
import { UserList } from '../UserList/UserList'

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  const [cursor, setCursor] = useState<number>(0)

  const setAvatars = ({
    users,
    avatars,
  }: {
    users: User[]
    avatars: Photo[]
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
    setCursor(0)
    setIsLoaded(false)
    Promise.all([api.getAllUsers(), api.getAvatars()])
      .then(([users, avatars]) => {
        setAvatars({ users, avatars })
        setIsLoaded(true)
        return users
      })
      .then((users) => {
        setUsers(
          users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      })
  }

  const handleClickByUser = (user: string) => {
    setSearchValue(user)
    setUsers([])
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { key } = e
    if (key === 'ArrowDown' && cursor < users.length) {
      e.preventDefault()
      setCursor((c) => ++c)
    } else if (key === 'ArrowUp' && cursor > 0) {
      e.preventDefault()
      setCursor((c) => --c)
    } else if (key === 'ArrowLeft' && cursor !== 0) {
      e.preventDefault()
      setCursor(0)
    }
  }

  return (
    <>
      <header className="header">
        <SearchForm
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </header>
      <main className="main">
        {isLoaded
          ? users[0] &&
            searchValue && (
              <UserList
                users={users}
                onClick={(user) => handleClickByUser(user)}
                cursor={cursor}
              />
            )
          : 'loaded...'}
      </main>
    </>
  )
}

export default App
