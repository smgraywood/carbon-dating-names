import React from "react";
import App from "./App";
import Form from "./Form.js";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
	cleanup();
});

describe("App Component", () => {
	//test 1
	test("renders the App correctly", () => {
		render(<App />);
	});

	//test 2
	test("User message", () => {
		render(<App />);
		const text = screen.getByTestId("user-message");
		expect(text).toHaveTextContent(
			"Enter your name and press submit to see what age we think you might be!"
		);
	});
});