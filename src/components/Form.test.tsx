import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from './Form';

describe('Form behavior', () => {
  test('When input is empty, new members cant be added', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insert names of the new members')

    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test('add new member when field is filled', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insert names of the new members')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Tamirys'
      }
    })

    fireEvent.click(button)

    expect(input).toHaveFocus()
    expect(input).toHaveValue("")
  })

  test('duplicated names cant be add to list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insert names of the new members')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Tamirys'
      }
    })

    fireEvent.click(button)

    fireEvent.change(input, {
      target: {
        value: 'Tamirys'
      }
    })

    fireEvent.click(button)

    const errorMessage = screen.getByRole('alert')

    expect(errorMessage.textContent).toBe('Duplicated name are not allowed')
  })

  test('error message disappear before 3 seconds', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insert names of the new members')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Tamirys'
      }
    })

    fireEvent.click(button)

    fireEvent.change(input, {
      target: {
        value: 'Tamirys'
      }
    })

    fireEvent.click(button)

    let errorMessage = screen.queryByRole('alert')

    expect(errorMessage).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    errorMessage = screen.queryByRole('alert')

    expect(errorMessage).toBeNull()
  })
})
