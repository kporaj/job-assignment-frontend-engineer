import React from "react";
import FollowAuthorButton from "../FollowAuthorButton";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

// TODO - Testing mocked API response after button click
test("<FollowAuthorButton /> renders properly when unfollowed", () => {
  const component = <FollowAuthorButton authorUsername={"alice"} followed={false} />;
  const { getByText } = render(component);

  getByText("Follow alice");
});
test("<FollowAuthorButton /> renders propperly when followe", () => {
  const component = <FollowAuthorButton authorUsername={"alice"} followed={true} />;
  const { getByText } = render(component);

  getByText("Unfollow alice");
});
