import { useRecoilValue } from "recoil"
import { membersList } from "../atom"

export const useMembersList = () => {
  return useRecoilValue(membersList)
}