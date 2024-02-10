import { instanceAxios } from "./Axios"

export const createGame = (config) => {
  return instanceAxios.post('/game', config)
    .then(res => res.data)
    .catch(err => err)
}

export const getGameById = (id) => {
  return instanceAxios.get(`/game/${id}`)
    .then(res => res.data)
    .catch(err => err)
}