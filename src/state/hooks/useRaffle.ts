import { useSetRecoilState } from "recoil"
import { resultFriendList } from "../atom"
import { createRaffle } from "../helpers/createRaffle"
import { useMembersList } from "./useMembersList"

export const useRaffle = () => {
  const members = useMembersList()
  const setResultList = useSetRecoilState(resultFriendList)

  return () => {
    const result = createRaffle(members)
    setResultList(result)
  }
}