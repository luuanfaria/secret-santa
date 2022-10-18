import shuffle from "just-shuffle"

export function createRaffle(members: string[]) {
  const membersTotal = members.length
  const shuffleList = shuffle(members)
  const result = new Map<string, string>()

  for (let i = 0; i < membersTotal; i++) {

    const friendIndex = i === (membersTotal - 1) ? 0 : i + 1
    result.set(shuffleList[i], shuffleList[friendIndex])
  }

  return result
}