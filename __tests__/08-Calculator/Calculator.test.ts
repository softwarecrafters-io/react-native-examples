import { ArithmeticOperation, Calculator } from "../../src/08-Caculator/core/calculator";

describe('The Calculator', ()=>{
  it('does addition operation', ()=>{
    let calculator = Calculator.createDefault();
    calculator = calculator.addNumber('1')
    calculator = calculator.updateOperation(ArithmeticOperation.Add);
    calculator = calculator.addNumber('2')

    calculator = calculator.calculate()

    expect(calculator.value).toEqual('3')
    expect(calculator.previousValue).toEqual('0')
  });
});
