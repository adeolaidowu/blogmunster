import moment from "moment";

const getVisiblePosts = (posts, { startDate, endDate, text }) => {
  return posts
    .filter((post) => {
      const createdAt = moment(post.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAt, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAt, "days")
        : true;
      const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};

export default getVisiblePosts;
