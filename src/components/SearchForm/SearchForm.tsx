import { ChangeEventHandler, FC, KeyboardEventHandler } from 'react'
import './SearchForm.css'

interface ISearchForm {
  onChange: ChangeEventHandler<HTMLInputElement>
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  value: string
}

const SearchForm: FC<ISearchForm> = ({ onChange, value, onKeyDown }) => {
  return (
    <form className="form">
      <button className="form__submit"></button>
      <input
        type="text"
        className="form__input"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </form>
  )
}
export default SearchForm
