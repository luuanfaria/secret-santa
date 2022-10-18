import { useRecoilValue } from "recoil"
import { resultFriendList } from "../atom"

export const useRaffleResult = () => {
  return useRecoilValue(resultFriendList)
}