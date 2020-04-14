import getVisiblePosts from "../../selectors/visiblePosts";
import posts from "../fixtures/posts";
import moment from "moment";

test("should filter by text value", () => {
  const filters = {
    text: "javascript",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisiblePosts(posts, filters);
  expect(result).toEqual([posts[0]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisiblePosts(posts, filters);
  expect(result).toEqual([posts[2], posts[0]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: moment(0).add(1, "days"),
  };
  const result = getVisiblePosts(posts, filters);
  expect(result).toEqual([posts[0], posts[1]]);
});
