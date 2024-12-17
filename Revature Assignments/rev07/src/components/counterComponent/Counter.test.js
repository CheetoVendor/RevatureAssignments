import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Testing the Counter Component', () => {

    test('Testing the Increment Counter', () => {
        // render component
        render(<Counter />);
        // select the elements you want to interact with
        const counter = screen.getByTestId("counter");
        const incrementButton = screen.getByTestId("increment");

        // Arrange, act, assert
        fireEvent.click(incrementButton);

        // assert the expected result
        expect(counter).toHaveTextContent("1")

    })

    test('Testing the decrement counter', () => {
        // render component
        render(<Counter />);

        const counter = screen.getByTestId("counter");
        const decrementButton = screen.getByTestId("decrement");

        fireEvent.click(decrementButton);

        expect(counter).toHaveTextContent("-1");
    })

})