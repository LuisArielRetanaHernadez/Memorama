import { instanceAxios } from "./Axios"

export const createGame = (config) => {
  return instanceAxios.post('/game', config)
    .then(res => res.data)
    .catch(err => err)
}