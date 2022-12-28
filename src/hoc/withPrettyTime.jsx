import React from 'react';

function getTimeSince(time) {
    const date = new Date(time)
    const currentTime = new Date();
    const timeDifference = currentTime - date;
    const minuteInMilliseconds = 1000 * 60;
    const hourInMilliseconds = minuteInMilliseconds * 60;
    const dayInMilliseconds = hourInMilliseconds * 24;
  
    if (timeDifference < minuteInMilliseconds) {
      return `${Math.round(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < hourInMilliseconds) {
      return `${Math.round(timeDifference / minuteInMilliseconds)} minutes ago`;
    } else if (timeDifference < dayInMilliseconds) {
      return `${Math.round(timeDifference / hourInMilliseconds)} hours ago`;
    } else {
      return `${date.toLocaleString()}`;
    }
  }

  function DateTime({date}) {
    return (
        <p className="date">{date}</p>
    )
 }
  
  function DateTimePretty(WrappedComponent) {
    return class extends React.Component {
      render() {
        const dateString = getTimeSince(this.props.date);
        return <WrappedComponent date={dateString} />;
      }
    }
  }
  
  export default DateTimePretty(DateTime);
  
  