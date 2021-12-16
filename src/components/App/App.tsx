import { ChangeEventHandler, FC, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <header className="header">
        <SearchForm value={searchValue} onChange={handleChange} />
      </header>
    </>
  )
}

export default App
