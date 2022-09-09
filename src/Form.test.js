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
	test("renders form correctly", () => {
		render(<Form />);
	});
});