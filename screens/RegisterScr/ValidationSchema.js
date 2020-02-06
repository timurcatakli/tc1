import * as Yup from 'yup';

const msg0 = 'Valid corporate email address is required';
const msg2 = 'Invalid email address!';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required(msg0)
    .email(msg2)
    .lowercase(),
});

export default ValidationSchema;
