import React from 'react'
import Day from './day'

var Week = React.createClass({
  displayName: 'Week',

  propTypes: {
    day: React.PropTypes.object.isRequired,
    endDate: React.PropTypes.object,
    excludeDates: React.PropTypes.array,
    filterDate: React.PropTypes.func,
    highlightDates: React.PropTypes.array,
    hoverDate: React.PropTypes.object,
    includeDates: React.PropTypes.array,
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    month: React.PropTypes.number,
    onDayClick: React.PropTypes.func,
    onDayMouseEnter: React.PropTypes.func,
    onDayMouseLeave: React.PropTypes.func,
    selected: React.PropTypes.object,
    startDate: React.PropTypes.object,
    utcOffset: React.PropTypes.number
  },

  handleDayClick (day) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day)
    }
  },

  handleDayMouseEnter (day) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day)
    }
  },

  handleDayMouseLeave (day) {
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(day)
    }
  },

  renderDays () {
    const startOfWeek = this.props.day.clone().startOf('week')
    return [0, 1, 2, 3, 4, 5, 6].map(offset => {
      const day = startOfWeek.clone().add(offset, 'days')
      return (
        <Day
            key={offset}
            day={day}
            month={this.props.month}
            onClick={this.handleDayClick.bind(this, day)}
            onMouseEnter={this.handleDayMouseEnter.bind(this, day)}
            onMouseLeave={this.handleDayMouseLeave.bind(this, day)}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            excludeDates={this.props.excludeDates}
            includeDates={this.props.includeDates}
            highlightDates={this.props.highlightDates}
            hoverDate={this.props.hoverDate}
            filterDate={this.props.filterDate}
            selected={this.props.selected}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            utcOffset={this.props.utcOffset}/>
      )
    })
  },

  render () {
    return (
      <div className="react-datepicker__week">
        {this.renderDays()}
      </div>
    )
  }

})

module.exports = Week
