import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required(),
  password: yup
    .string()
    .matches(
      /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{8,30}$/,
      {
        message: 'Unsecure password',
        excludeEmptyString: true,
      },
    ),
});

export default userSchema;
