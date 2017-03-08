import React from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

const styles = {
  ul: {
    listStyleType: 'none',
  },
};

const TwoWayDiscount = ({
  buyTwoWayTicket,
  useTwoWayDiscount,
  handleBuyChange,
  handleUseDiscountChange,
  }) => (
    <div>
      <Checkbox
        checked={buyTwoWayTicket}
        onChange={handleBuyChange}
      >
        往復切符を買う
      </Checkbox>
      {buyTwoWayTicket &&
      <ul style={styles.ul}>
        <li><Checkbox
          inline
          checked={useTwoWayDiscount}
          onChange={handleUseDiscountChange}
        >
            往復割を使う
          </Checkbox></li>
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
  useTwoWayDiscount: React.PropTypes.bool.isRequired,
  handleBuyChange: React.PropTypes.func.isRequired,
  handleUseDiscountChange: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { buyTwoWayTicket, useTwoWayDiscount } = state;
  return {
    buyTwoWayTicket,
    useTwoWayDiscount,
  };
}

function toggleBuyTwoWayTicket() {
  return { type: 'toggle/buyTwoWayTicket' };
}

function toggleUseTwoWayDiscount() {
  return { type: 'toggle/useTwoWayDiscount' };
}

function mapDispatchToProps(dispatch) {
  return {
    handleBuyChange: () => dispatch(toggleBuyTwoWayTicket()),
    handleUseDiscountChange: () => dispatch(toggleUseTwoWayDiscount()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoWayDiscount);
