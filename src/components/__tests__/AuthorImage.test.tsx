import React from "react";
import AuthorImage from "../AuthorImage";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

test("<AuthorImage /> renders properly", () => {
  const { getByTestId } = render(<AuthorImage className="test" />);

  expect(getByTestId("author-image").className).toBe("test");
});
