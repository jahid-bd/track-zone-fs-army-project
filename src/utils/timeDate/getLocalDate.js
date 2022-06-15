const getLocalDate = () => {
  const date = new window.Date();

  return date.toDateString();
};

export default getLocalDate;
