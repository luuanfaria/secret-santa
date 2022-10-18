import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, membersList } from "../atom"

export const useAddMember = () => {
  const setList = useSetRecoilState(membersList)

  const list = useRecoilValue(membersList)

  const setError = useSetRecoilState(errorState)

  return (memberName: string) => {
    if (list.includes(memberName)) {
      setError('Duplicated name are not allowed')
      setTimeout(() => {
        setError('')
      }, 3000)
      return
    }
    return setList(list => [...list, memberName])
  }
}