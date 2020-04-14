import filtersReducer from "../../reducers/filtersReducer";
import moment from "moment";

test("should set intial state", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    startDate: undefined,
    endDate: undefined,
  });
});

test("should set text filter in state", () => {
  const text = "bankai";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set start date filter in app state", () => {
  const startDate = moment();
  const action = { type: "SET_START_DATE", startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should set end date filter in app state", () => {
  const endDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
