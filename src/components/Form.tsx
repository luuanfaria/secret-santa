import { useRef, useState } from "react"
import { useAddMember } from "../state/hooks/useAddMember"
import { useErrorMessage } from "../state/hooks/useErrorMessage"

export function Form() {
  const [name, setName] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const addMember = useAddMember()

  const errorMessage = useErrorMessage()

  const addNewMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addMember(name)

    setName('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={addNewMember}>
      <div className="mb-8">
        <input
          className="rounded-l-input h-82 w-8/12 box-border pl-2 text-xl
            border-2 border-solid border-black focus:outline-none shadow-input
            large:block large:w-full large:rounded-input large:shadow-input large:mb-18
            placeholder:pl-2"
          ref={inputRef}
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Insert names of the new members"
        />
        <button
          className="rounded-r-input h-82 w-1/3 box-border border-2 border-solid
            border-black text-xl text-black shadow-button cursor-pointer
            bg-gray-dark pt-px hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed
            large:block large:mt-16 large:my-0 large:mx-auto large:w-220 large:rounded-input"
          type="submit"
          disabled={!name}
        >
          Add
        </button>
      </div>

      {errorMessage &&
        <p
          className="text-text-alert bg-pink-light p-4 border border-solid
            border-pink rounded-lg large:my-48px large:mx-0"
          role="alert">
          {errorMessage}
        </p>
      }
    </form>
  )
}