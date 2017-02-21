import * as actionTypes from "../../src/actions/types";
import * as actions from "../../src/actions";
import * as constants from "../../src/constants";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import httpAdapter from "axios/lib/adapters/http";
import nock from "nock";
import thunk from "redux-thunk";

// Axios doesn't play well with nock so this needs to be done
axios.defaults.host    = constants.API_URL;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

describe("actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test(".exampleAction", () => {
    expect(actions.exampleAction("example")).toEqual({text: "example", type: actionTypes.EXAMPLE_ACTION});
  });

  test(".signIn", () => {
    const expectedToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
      "eyJzdWIiOiJVc2VyOjEiLCJleHAiOjE0OTAxMjY4OTV9." +
      "Zxiag0FM-elneffE9FHIiV_vzMuWc6Fz_8Vmir7YHrs";
    const store = mockStore();
    const expectedActions = [
      {"type": "SIGN_IN_REQUEST"},
      {"type": "SIGN_IN_SUCCESS", token: expectedToken},
    ];

    nock(constants.API_URL)
      .post("/sign_in")
      .reply(200, {token: expectedToken});

    return store.dispatch(actions.signIn("testing@example.com", "secret"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
