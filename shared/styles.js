import { StyleSheet } from 'react-native';
import config from 'shared/config';

const customStyles = StyleSheet.create({
  button: { fontFamily: 'Rubik-Medium', textTransform: 'uppercase' },
  buttonFooter: {
    width: '100%',
    height: 90,
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
    justifyContent: 'flex-end',
  },
  body: {
    flex: 1,
    width: '100%',
  },
  form: {
    width: '100%',
    paddingLeft: config.style.paddingLeft - 10,
    paddingRight: config.style.paddingRight,
  },
});

export default customStyles;
