import React from "react";
import FavoriteArticleButton from "../FavoriteArticleButton";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

// TODO - Testing mocked API response after button click
test("<FavoriteArticleButton /> renders properly for unfavorited state", () => {
  const component = <FavoriteArticleButton articleSlug={"1"} favoritesCount={66} favorited={false} />;
  const { getByText } = render(component);

  const button = getByText("66");
  expect(button.className).toBe("btn btn-outline-primary btn-sm pull-xs-right");
});

test("<FavoriteArticleButton /> renders properly for favorited state and with label", () => {
  const component = <FavoriteArticleButton articleSlug={"1"} favoritesCount={66} favorited={true} withLabel={true} />;
  const { getByText, getByTestId } = render(component);

  const button = getByText("Favorite post (66)");
  expect(button.className).toBe("btn btn-primary btn-sm pull-xs-right");
});
