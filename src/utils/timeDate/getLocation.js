const getLocation = () => {
  const date = new window.Date();
  const location = date.toString().split("(")[1].split(")")[0];
  return location;
};

export default getLocation;
