//* Form Validate Function
//? This Helper Function for JOI Lib
const formValidate = (formData, schema) => {
  const errors = {};
  const options = { abortEarly: false };
  const { error } = schema.validate(formData, options);

  if (!error) return null;

  if (error)
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

  return errors;
};

export { formValidate };
