import * as actionTypes from "../../src/actions/types";
import userReducer from "../../src/reducers/user-reducer";

describe("userReducer", () => {
  test("initial state", () => {
    expect(userReducer(undefined, {})).toEqual({});
  });

  test ("when action type is SIGN_IN_SUCCESS", () => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
      "eyJzdWIiOiJVc2VyOjEiLCJleHAiOjE0OTAxMjY4OTV9." +
      "Zxiag0FM-elneffE9FHIiV_vzMuWc6Fz_8Vmir7YHrs";

    expect(userReducer(undefined, {type: actionTypes.SIGN_IN_SUCCESS, token}))
      .toEqual({token});

    expect(userReducer({token: "prior_token"}, {type: actionTypes.SIGN_IN_SUCCESS, token}))
      .toEqual({token});
  });
});
