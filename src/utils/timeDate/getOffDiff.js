const getOffDiff = (value) => {
  const hour = value.split(" ")[0].split(":")[0];
  const min = Math.round(Number(value.split(" ")[0].split(":")[1]) / 0.6);

  return Number(`${hour}.${min}`);
};

export default getOffDiff;
