import { User } from '../types'

class Api {
  baseUrl: string

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl
  }

  _checkResponse(endpoint: string) {
    return fetch(this.baseUrl + endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject()
      }
    })
  }

  getAllUsers(): Promise<User[]> {
    return this._checkResponse('/users')
  }

  getAvatars() {
    return this._checkResponse('/photos')
  }
}

export const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
})
