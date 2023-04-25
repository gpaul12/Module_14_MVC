module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    const myDate = new Date(date);
    const formattedDate = `${myDate.getMonth() + 1}/${myDate.getDate()}/${
      myDate.getFullYear() + 5
    }`;
    return formattedDate;
  },
};
