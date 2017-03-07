import React from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

const styles = {
  ul: {
    listStyleType: 'none',
  },
};

const TwoWayDiscount = ({ buyTwoWayTicket, handleBuyChange }) => (
  <div>
    <Checkbox
      checked={buyTwoWayTicket}
      onChange={handleBuyChange}
    >
      往復切符を買う
    </Checkbox>
    {buyTwoWayTicket &&
      <ul style={styles.ul}>
        <li><Checkbox inline>往復割を使う</Checkbox></li>
        <ul style={styles.ul}>
          <li><Checkbox inline>片道601km以上である（東京ー大阪間は不可）</Checkbox></li>
          <li><Checkbox inline>
            乗車券の有効日数を超える場合は往復切符を買うことができないことを知っている<br />
            （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">
              乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）
          </Checkbox></li>
        </ul>
      </ul>}
  </div>
);

TwoWayDiscount.propTypes = {
  buyTwoWayTicket: React.PropTypes.bool.isRequired,
  handleBuyChange: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { buyTwoWayTicket } = state;
  return {
    buyTwoWayTicket,
  };
}

function toggleBuyTwoWayTicket() {
  return { type: 'toggle/buyTwoWayTicket' };
}

function mapDispatchToProps(dispatch) {
  return {
    handleBuyChange: () => dispatch(toggleBuyTwoWayTicket()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoWayDiscount);
