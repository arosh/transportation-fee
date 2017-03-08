import React from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

const styles = {
  ul: {
    listStyleType: 'none',
  },
};

const StudentDiscount = ({ useDiscount, handleUseChange }) => (
  <div>
    <Checkbox
      checked={useDiscount}
      onChange={handleUseChange}
    >
      学割を使う
    </Checkbox>
    {useDiscount &&
      <ul style={styles.ul}>
        <li><Checkbox inline>片道101km以上である</Checkbox></li>
        <li><Checkbox inline>
          乗車券の有効日数を超える場合は往復切符を買うことができないので，往路と復路で学割証が2枚必要なことを知っている<br />
          （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）
          </Checkbox></li>
        <li><Checkbox inline>
          大都市近郊区間では往復券は発売当日のみ有効で，日が変わる場合には往路と復路で学割証が2枚必要なことを知っている<br />
          （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02b.html#5">大都市近郊区間内のみをご利用になる場合の特例｜きっぷのルール：JRおでかけネット</a>）
          </Checkbox></li>
      </ul>}
  </div>
);

StudentDiscount.propTypes = {
  useDiscount: React.PropTypes.bool.isRequired,
  handleUseChange: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    useDiscount: state.studentDiscount.use,
  };
}

function toggleUseStudentDiscount() {
  return { type: 'toggle/useStudentDiscount' };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUseChange: () => dispatch(toggleUseStudentDiscount()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDiscount);
