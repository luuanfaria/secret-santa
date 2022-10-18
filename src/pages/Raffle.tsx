import { DiceFive } from "phosphor-react"
import { useState } from "react"
import { Card } from "../components/Card"
import { useMembersList } from "../state/hooks/useMembersList"
import { useRaffleResult } from "../state/hooks/useRaffleResult"

export function Raffle() {
  const members: string[] = useMembersList()

  const [currentMember, setCurrentMember] = useState('')
  const [secretFriend, setSecretFriend] = useState('')

  const result = useRaffleResult()

  const raffle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (result.has(currentMember)) {
      setSecretFriend(result.get(currentMember)!)
      setTimeout(() => {
        setSecretFriend('')
      }, 5000)
    }
  }

  return (
    <Card>
      <section className="text-2xl"
      >
        <h2>Who will be first?</h2>
        <form onSubmit={raffle}>
          <select
            className="appearance-none rounded-input h-82 w-07 box-border py-0 px-4 text-gray-700 text-xl
            border-2 border-solid border-black shadow-input placeholder:text-black focus:outline-none
            large:w-220 large:my-8 mx-0"
            required
            name="currentMember"
            id="currentMember"
            placeholder="Select your name"
            value={currentMember}
            onChange={e => setCurrentMember(e.target.value)}
          >
            <option>Click here to select your name</option>
            {members.map(member =>
              <option key={member}>{member}</option>
            )}
          </select>

          <p className="text-xl font-extralight my-8 mx-0">Click to draw and see your secret friend!</p>

          <button
            className="flex w-350 h-80 text-xl items-center justify-center gap-2 shadow-button rounded-input bg-orange text-white cursor-pointer my-8 mx-auto hover:bg-purple disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <DiceFive size={34} weight="fill" />
            Raffle!
          </button>
        </form>

        {secretFriend &&
          <p role="alert"
            className="text-orange text-2xl"
          >
            {secretFriend}
          </p>
        }

        <footer className="my-16 mx-0 items-center">
          <img className="my-0 mx-auto" src="/images/aviao.png" alt="A paper airplane drawing" />
        </footer>
      </section>

    </Card>
  )
}