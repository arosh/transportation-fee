import React from 'react';
import { Alert, Grid, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

const styles = {
  title: {
    textAlign: 'center',
  },
  ul: {
    listStyleType: 'none',
  },
};

const App = ({ basic, express, handleChangeBasic, handleChangeExpress }) => (
  <Grid>
    <h1 style={styles.title}>JRの割引計算機</h1>
    <form>
      <FormGroup>
        <ControlLabel>運賃（円）</ControlLabel>
        <FormControl
          type="number"
          value={basic}
          onChange={handleChangeBasic}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>特急料金（円）</ControlLabel>
        <FormControl
          type="number"
          value={express}
          onChange={handleChangeExpress}
        />
      </FormGroup>

      <Checkbox inline>往復切符を買う</Checkbox>
      <ul style={styles.ul}>
        <li><Checkbox inline>往復割を使う</Checkbox></li>
        <ul style={styles.ul}>
          <li><Checkbox inline>片道601km以上である（東京ー大阪間は不可）</Checkbox></li>
          <li><Checkbox inline>乗車券の有効日数を超える場合は往復切符を買うことができないことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）</Checkbox></li>
        </ul>
      </ul>

      <Checkbox inline>学割を使う</Checkbox>
      <ul style={styles.ul}>
        <li><Checkbox inline>片道101km以上である</Checkbox></li>
        <ul style={styles.ul}>
          <li><Checkbox inline>乗車券の有効日数を超える場合は往復切符を買うことができないので，往路と復路で学割証が2枚必要なことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）</Checkbox></li>
          <li><Checkbox inline>大都市近郊区間では往復券は発売当日のみ有効で，日が変わる場合には往路と復路で学割証が2枚必要なことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02b.html#5">大都市近郊区間内のみをご利用になる場合の特例｜きっぷのルール：JRおでかけネット</a>）</Checkbox></li>
        </ul>
      </ul>
    </form>
    <Alert bsStyle="warning">チェックボックスを確認してください</Alert>
    <b>結果</b> ???円
  </Grid>
);

App.propTypes = {
  basic: React.PropTypes.number.isRequired,
  express: React.PropTypes.number.isRequired,
  handleChangeBasic: React.PropTypes.func.isRequired,
  handleChangeExpress: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function changeBasic(value) {
  return { type: 'update/basic', value };
}

function changeExpress(value) {
  return { type: 'update/express', value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeBasic: e => dispatch(changeBasic(e.target.value)),
    handleChangeExpress: e => dispatch(changeExpress(e.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
