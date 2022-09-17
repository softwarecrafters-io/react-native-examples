import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react-native";
import { CounterScreen } from "../../src/02-Counter/screens/CounterScreen";

describe("The Counter", ()=>{
  it('renders counter with initial value',  async () => {
    render(<CounterScreen />);

    const result =  await screen.findByText('Counter: 0')
    expect(result).toBeTruthy();
  });

  it('render the counter incrementing the value when increase is pressed',  async () => {
    render(<CounterScreen />);
    const increaseButton = await screen.findByText('+1')

    fireEvent(increaseButton, 'press');
    fireEvent(increaseButton, 'press');

    const result =  await screen.findByText('Counter: 2')
    expect(result).toBeTruthy()
  });

  it('render the counter decrementing the value when decrease is pressed',  async () => {
    render(<CounterScreen />);
    const increaseButton = await screen.findByText('-1')

    fireEvent(increaseButton, 'press');
    fireEvent(increaseButton, 'press');

    const result =  await screen.findByText('Counter: -2')
    expect(result).toBeTruthy()
  });
})
