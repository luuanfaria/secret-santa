import { useNavigate } from "react-router-dom"
import { useMembersList } from "../state/hooks/useMembersList"
import { useRaffle } from "../state/hooks/useRaffle"

export function Footer() {
  const members = useMembersList()
  const navigate = useNavigate()

  const raffle = useRaffle()

  const start = () => {
    raffle()
    navigate('/raffle')
  }

  return (
    <footer className="flex items-center justify-between large:flex-col">
      <button className="w-350 h-20 text-xl shadow-button rounded-input bg-orange
        text-white cursor-pointer disabled:opacity-60 cursor-not-allowed
        hover:bg-purple large:w-220 large:my-32 large:mx-0"
        disabled={members.length < 3}
        onClick={start}>
        Start
      </button>
      <img className="my-0"
        src="/images/sacolas.png"
        alt="Shopping bags"
      />
    </footer>
  )
}