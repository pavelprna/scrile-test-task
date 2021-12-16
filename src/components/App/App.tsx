import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { User } from '../../types'
import { api } from '../../utils/Api'
import SearchForm from '../SearchForm/SearchForm'

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.getAllUsers().then((users) => setUsers(users))
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <header className="header">
        <SearchForm value={searchValue} onChange={handleChange} />
      </header>
      <main className="main"></main>
    </>
  )
}

export default App
