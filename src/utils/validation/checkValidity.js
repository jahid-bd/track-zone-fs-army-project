const checkValidity = (values) => {
  const error = {};

  if (!values.title) {
    error.title = "Invalid Title!";
  } else if (String(values.title).trim().length < 3) {
    error.title = "Title must be at least 3 chars!";
  } else if (String(values.title).trim().length > 50) {
    error.title = "Title must could be max 50 chars!";
  }

  if (!values.time && !values.time.trim().length < 5) {
    error.time = "Invalid Time!";
  }

  if (!values.date && !values.date.trim().length < 6) {
    error.date = "Invalid Date!";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

export default checkValidity;
