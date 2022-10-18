import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useMembersList } from '../state/hooks/useMembersList';
import { List } from './List';

jest.mock('../state/hooks/useMembersList', () => {
  return {
    useMembersList: jest.fn()
  }
})

describe('Empty list', () => {

  beforeEach(() => {
    (useMembersList as jest.Mock).mockReturnValue([])
  })

  test('Should render as empty', () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(0)
  })
})

describe('Filled List', () => {
  const members = ['Tamirys', 'Luan']

  beforeEach(() => {
    (useMembersList as jest.Mock).mockReturnValue(members)
  })

  test('Should render with members', () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(members.length)
  })
})