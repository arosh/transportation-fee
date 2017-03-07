import React from 'react';
import { Alert, Grid, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import TwoWayDiscount from './TwoWayDiscount';
import StudentDiscount from './StudentDiscount';

const styles = {
  title: {
    textAlign: 'center',
  },
};

const App = ({ basic, express, handleBasicChange, handleExpressChange }) => (
  <Grid>
    <h1 style={styles.title}>JRの割引計算機</h1>
    <FormGroup>
      <ControlLabel>運賃（円）</ControlLabel>
      <FormControl
        type="number"
        value={basic}
        onChange={handleBasicChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel>特急料金（円）</ControlLabel>
      <FormControl
        type="number"
        value={express}
        onChange={handleExpressChange}
      />
    </FormGroup>
    <TwoWayDiscount />
    <StudentDiscount />
    <Alert bsStyle="warning">チェックボックスを確認してください</Alert>
    <b>結果</b> ???円
  </Grid>
);

App.propTypes = {
  basic: React.PropTypes.number.isRequired,
  express: React.PropTypes.number.isRequired,
  handleBasicChange: React.PropTypes.func.isRequired,
  handleExpressChange: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { basic, express } = state;
  return { basic, express };
}

function updateBasic(value) {
  return { type: 'update/basic', value };
}

function updateExpress(value) {
  return { type: 'update/express', value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleBasicChange: e => dispatch(updateBasic(e.target.value)),
    handleExpressChange: e => dispatch(updateExpress(e.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
