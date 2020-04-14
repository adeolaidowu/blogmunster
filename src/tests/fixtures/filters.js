import moment from "moment";

const filters = {
  text: "",
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: "anime",
  startDate: moment(),
  endDate: moment().add(5, "days"),
};

export { filters, altFilters };
