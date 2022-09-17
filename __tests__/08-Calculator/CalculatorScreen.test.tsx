import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import { CalculatorScreen } from "../../src/08-Caculator/screens/CalculatorScreen";

describe("The calculator", ()=>{
  it('renders the result of an addition operation',  async () => {
    render(<CalculatorScreen />);
    const oneButton = await screen.findByTestId('1')
    const twoButton = await screen.findByTestId('2')
    const additionButton = await screen.findByTestId('+')
    const calculateButton = await screen.findByTestId('=')
    fireEvent(oneButton, 'onPress');
    fireEvent(additionButton, 'onPress');
    fireEvent(twoButton, 'onPress');

    fireEvent(calculateButton, 'onPress');

    const result = await screen.findByTestId('result');
    // @ts-ignore
    expect(result).toHaveTextContent('3')
  });
})

