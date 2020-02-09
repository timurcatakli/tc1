const config = {
  api: 'http://localhost:5001/crcl-41309/us-central1',
  style: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  colors: {
    error: 'rgb(156, 7, 7)',
    primary: '#FF5C3E',
    secondaryColor: 'black',
    gray: '#545454',
    lightGray: 'rgba(0, 0, 0, 0.2)',
    darkGreen: '#005D68',
    gradientTop: '#5CD89F',
    gradientBottom: '#FFD36E',
  },
  pages: {
    feed: {
      title: 'feed',
    },
  },
  errors: {
    msg1: 'Either the company is not in our database or a user with this email already exists...',
  },
};

export default config;
