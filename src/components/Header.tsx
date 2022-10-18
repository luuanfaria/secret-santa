export function Header() {
  return (
    <header className="flex justify-around pt-120 large:pt-60 large:flex-col large:items-center">
      <div className="bg-no-repeat bg-center large:bg-logosm w-351 bg-logo bg-contain large:w-235 large:h-199" role="img" aria-label="Raffle Logo"></div>
      <img className="z-10" src="/images/participante.png" alt="Person with a gift in the hand" />
    </header>
  )
}