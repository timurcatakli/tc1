import * as Yup from 'yup';

const msg0 = 'Field is required!';
const msg1 = 'String too short!';
const msg2 = 'String too long!';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, msg1)
    .max(50, msg2)
    .required(msg0)
    .email('Invalid email')
    .lowercase(),
});

export default ValidationSchema;
