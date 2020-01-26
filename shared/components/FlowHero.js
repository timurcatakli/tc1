import React from 'react';
import PropTypes from 'prop-types';
import { Row, Grid } from 'react-native-easy-grid';
import FlowImage from './FlowImage';
import TitleAndText from './TitleAndText';

const FlowHero = ({ image, title, text }) => {
  return (
    <Row style={{ height: 266, justifyContent: 'center' }}>
      <Grid>
        <Row style={{ height: 146, justifyContent: 'center' }}>
          <FlowImage image={image} />
        </Row>
        <Row style={{ height: 120 }}>
          <TitleAndText title={title}>{text}</TitleAndText>
        </Row>
      </Grid>
    </Row>
  );
};

FlowHero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FlowHero;
