/**
 * @format
 */

import React from 'react';
import {render, screen} from '@testing-library/react-native'

import { HelloWorldScreen } from "../../src/01-HelloWorld/screen/HelloWorldScreen";

it('renders greet',  async () => {
  render(<HelloWorldScreen />);

  const greet =  await screen.findByText('Hello World!')
  expect(greet).toBeTruthy()
});
