const date = `${new Date().toLocaleString()}`;

const getDate = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    const day = weekday[d.getDay()];
    const date = d.getDate();
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    const str = `${day}, ${date} ${month} ${year}`;
    return str;
  };

export default getDate;