const getlocalTimeOffset = () => {
  const date = new window.Date();
  let offset = date.getTimezoneOffset() / 60;

  if (offset > 0) {
    offset = -Math.abs(offset);
  } else {
    offset = Math.abs(offset);
  }

  return Number(offset);
};

export default getlocalTimeOffset;
