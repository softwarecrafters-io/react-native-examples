import { act, renderHook } from "@testing-library/react-native";
import { useCalculator } from "../../src/08-Caculator/hooks/UseCalculator";
import { Calculator } from "../../src/08-Caculator/core/calculator";

describe("The calculator hook", ()=>{
  it('updates the result of an addition operation',  async () => {
    const { result } = renderHook(() => useCalculator(Calculator.createDefault()))
    act(()=> result.current.onPressNumber('1'))
    act(()=> result.current.onAdd())
    act(()=> result.current.onPressNumber('2'))

    act(()=> result.current.onCalculate())

    expect(result.current.calculator.value).toEqual('3')
    expect(result.current.calculator.previousValue).toEqual('0')
  });
});

