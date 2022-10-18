import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useMembersList } from '../state/hooks/useMembersList'
import { Footer } from './Footer'

jest.mock('../state/hooks/useMembersList', () => {
  return {
    useMembersList: jest.fn()
  }
})

const mockNavigate = jest.fn()
const mockRaffle = jest.fn()

jest.mock('../state/hooks/useRaffle.ts', () => {
  return {
    useRaffle: () => mockRaffle
  }
})

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('When dont have members enought', () => {
  beforeEach(() => {
    (useMembersList as jest.Mock).mockReturnValue([])
  })

  test('Raffle cant start', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})

describe('When have members to start', () => {
  const members = ['Tamirys', 'Luan', 'Maju']

  beforeEach(() => {
    (useMembersList as jest.Mock).mockReturnValue(members)
  })

  test('Raffle can start', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  test('Raffle was started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/raffle')
    expect(mockRaffle).toHaveBeenCalledTimes(1)
  })
})

