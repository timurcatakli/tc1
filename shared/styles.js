import { StyleSheet } from 'react-native';
import config from 'shared/config';

const customStyles = StyleSheet.create({
  button: { color: 'white', fontFamily: 'Rubik-Medium', textTransform: 'uppercase' },
  bodyView: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonView: {
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
    width: '100%',
    justifyContent: 'flex-end',
  },
  buttonRow: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  form: {
    width: '100%',
    paddingLeft: config.style.paddingLeft - 10,
    paddingRight: config.style.paddingRight,
  },
});

export default customStyles;
