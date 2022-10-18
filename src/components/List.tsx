import { useMembersList } from "../state/hooks/useMembersList"

export function List() {
  const members: string[] = useMembersList()

  return (
    <ul>
      {members.map(member => <li key={member}>{member}</li>)}
    </ul>
  )
}