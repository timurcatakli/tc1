import { StyleSheet } from 'react-native';
import config from 'shared/config';

const customStyles = StyleSheet.create({
  viewContentFooterWrapper: {
    flex: 1,
  },
  viewContentWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  viewFooterWrapper: {
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 20,
  },
  formWrapper: {
    paddingLeft: config.style.paddingLeft - 10,
    paddingRight: config.style.paddingRight - 10,
    width: '100%',
  },
  buttonLabel: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    fontSize: 16,
    color: 'white',
  },
});

export default customStyles;
