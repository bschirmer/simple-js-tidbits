import React from "react";
import Counter from "./counter";
import { fireEvent, render } from "@testing-library/react";

test('Counter component counts', () => {
    // render component
    const { getByTestId, getByText } = render(<Counter />);

    const counterValue = getByTestId("count").textContent;
    const minus1 = getByText("-1");
    const reset = getByText("0");
    const plus1 = getByText("+1");

    expect(counterValue).toBe("0");

    // test -1
    fireEvent.click(minus1);
    expect(counterValue).toBe('-1');
    // we want to test this twice so reset can be tested
    fireEvent.click(minus1);
    expect(counterValue).toBe("-2");

    // test reset
    fireEvent.click(reset);
    expect(counterValue).toBe("0");

    // test reset
    fireEvent.click(plus1);
    expect(counterValue).toBe("+1");
    fireEvent.click(plus1);
    expect(counterValue).toBe("+2");

});