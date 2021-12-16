import { ChangeEventHandler, FC, useState } from 'react'
import './SearchForm.css'

interface ISearchForm {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

const SearchForm: FC<ISearchForm> = ({ onChange, value }) => {
  return (
    <form className="form">
      <button className="form__submit"></button>
      <input
        type="text"
        className="form__input"
        value={value}
        onChange={onChange}
      />
    </form>
  )
}
export default SearchForm
