import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { RecoilRoot } from 'recoil'
import { useMembersList } from '../state/hooks/useMembersList'
import { useRaffleResult } from '../state/hooks/useRaffleResult'
import { Raffle } from './Raffle'

jest.mock('../state/hooks/useMembersList', () => {
  return {
    useMembersList: jest.fn()
  }
})

jest.mock('../state/hooks/useRaffleResult', () => {
  return {
    useRaffleResult: jest.fn()
  }
})

describe('Raffle page', () => {
  const members = [
    'Luan',
    'Tamirys',
    'Maju'
  ]

  const result = new Map([
    ['Luan', 'Tamirys'],
    ['Tamirys', 'Maju'],
    ['Maju', 'Luan']
  ])

  beforeEach(() => {
    (useMembersList as jest.Mock).mockReturnValue(members);
    (useRaffleResult as jest.Mock).mockReturnValue(result)
  })

  test('All members can show your secret friend', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    )

    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(members.length + 1)
  })

  test('The secret friend is revealed when user asked', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Select your name')
    fireEvent.change(select, {
      target: {
        value: members[0]
      }
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const secretFriend = screen.getByRole('alert')
    expect(secretFriend).toBeInTheDocument()
  })

  test('The revealed name should disappear after 5 seconds', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Select your name')

    fireEvent.change(select, { target: { value: members[1] } })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    act(() => {
      jest.runAllTimers();
    })

    const alert = screen.queryByRole('alert')

    expect(alert).not.toBeInTheDocument()
  })
})