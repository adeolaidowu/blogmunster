import moment from "moment";

const posts = [
  {
    id: "1",
    title: "javascript",
    content: "about javascript",
    createdAt: moment(0).valueOf(),
  },
  {
    id: "2",
    title: "anime",
    content: "about anime",
    createdAt: moment(0).subtract(3, "days").valueOf(),
  },
  {
    id: "3",
    title: "vue",
    content: "about vue",
    createdAt: moment(0).add(3, "days").valueOf(),
  },
];

export default posts;
