import React, { Component } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { setTextFilter, setStartDate, setEndDate } from "../actions/filters";

class PostFilters extends Component {
  state = {
    calendarFocused: null,
  };

  handleTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  };
  handleDatesChange = ({ startDate, endDate }) => {
    console.log(this.props);
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="text"
          placeholder="Search by title"
          onChange={this.handleTextChange}
          value={this.props.filters.text}
        />
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={"1"}
          endDate={this.props.filters.endDate}
          endDateId={"2"}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(PostFilters);
