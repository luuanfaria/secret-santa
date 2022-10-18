import { createRaffle } from "./createRaffle"

describe('When we do a raffle', () => {
  test('Member can be raffle yourself', () => {
    const members = [
      'Luan',
      'Tamirys',
      'Maju'
    ]

    const raffle = createRaffle(members)

    members.forEach(member => {
      const secretFriend = raffle.get(member)

      expect(secretFriend).not.toEqual(member)
    })
  })
})