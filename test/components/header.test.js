import Header from "../../src/components/header";
import React from "react";
import {shallow} from "enzyme";

const setup = () => {
  const props = {
    user: {
      email: "testing@example.com",
    },
  };

  return {
    header: shallow(<Header {...props} />),
    props,
  };
};

describe("Header", () => {
  test("initial state", () => {
    const {header, props} = setup();

    expect(header.find(".title").text()).toEqual("Animated Octo Succotash");
    expect(header.find(".logged-in-user").text()).toEqual(props.user.email);
  });
});
