const todayDate = new Date();

const getDay = (time) => {
  var date = new Date(time * 1000);
  const datePosted = new Date(date).getDate();
  const dateNow = todayDate.getDate();
  const diffDays = dateNow - datePosted;
  return diffDays;
};

export default getDay;
