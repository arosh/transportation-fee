import React from 'react';

const styles = {
  title: {
    textAlign: 'center',
  },
  ul: {
    listStyleType: 'none',
  },
};

const App = () => (
  <div className="container">
    <h1 style={styles.title}>JRの割引計算機</h1>
    <form>
      <div className="form-group">
        <label>運賃（円）</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>特急料金（円）</label>
        <input type="text" className="form-control" />
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />往復切符を買う</label>
      </div>

      <ul style={styles.ul}>
        <li>
          <div className="checkbox">
            <label><input type="checkbox" />往復割を使う</label>
            <ul style={styles.ul}>
              <li><label><input type="checkbox" />片道601km以上である（東京ー大阪間は不可）</label></li>
              <li><label><input type="checkbox" />乗車券の有効日数を超える場合は往復切符を買うことができないことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）</label></li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="checkbox">
        <label><input type="checkbox" />学割を使う</label>
        <ul style={styles.ul}>
          <li><label><input type="checkbox" />片道101km以上である</label></li>
          <li><label><input type="checkbox" />乗車券の有効日数を超える場合は往復切符を買うことができないので，往路と復路で学割証が2枚必要なことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）</label></li>
          <li><label><input type="checkbox" />大都市近郊区間では往復券は発売当日のみ有効で，日が変わる場合には往路と復路で学割証が2枚必要なことを知っている<br />（<a href="https://www.jr-odekake.net/railroad/ticket/guide/02b.html#5">大都市近郊区間内のみをご利用になる場合の特例｜きっぷのルール：JRおでかけネット</a>）</label></li>
        </ul>
      </div>
    </form>
    <div className="alert alert-warning">チェックボックスを確認してください</div>
    <b>結果</b> ???円
  </div>
);

export default App;
