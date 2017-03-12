<template>
  <div class="container">
    <h1>JRの割引計算機</h1>
    <div class="form-group">
      <label>運賃（円）</label>
      <input type="number" class="form-control" v-model.number="basicFee">
    </div>
    <div class="form-group">
      <label>特急料金（円）</label>
      <input type="number" class="form-control" v-model.number="expressFee">
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="buyTwoWayTicket">
        往復切符を買う
      </label>
      <ul v-if="buyTwoWayTicket">
        <li>
          <label>
            <input type="checkbox" v-model="useTwoWayDiscount">
            往復割を使う
          </label>
          <ul v-if="useTwoWayDiscount">
            <li>
              <label>
                <input type="checkbox">
                片道601km以上である（東京ー大阪間は不可）
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox">
                乗車券の有効日数を超える場合は往復切符を買うことができないことを知っている<br>
                （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="useStudentDiscount">
        学割を使う
      </label>
      <ul v-if="useStudentDiscount">
        <li>
          <label>
            <input type="checkbox">
            片道101km以上である
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            乗車券の有効日数を超える場合は往復切符を買うことができないので，往路と復路で学割証が2枚必要なことを知っている<br>
            （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02a.html#1">乗車券の有効期間｜きっぷのルール：JRおでかけネット</a>）
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            大都市近郊区間では往復券は発売当日のみ有効で，日が変わる場合には往路と復路で学割証が2枚必要なことを知っている<br>
            （<a href="https://www.jr-odekake.net/railroad/ticket/guide/02b.html#5">大都市近郊区間内のみをご利用になる場合の特例｜きっぷのルール：JRおでかけネット</a>）
          </label>
        </li>
      </ul>
    </div>
    <div class="alert alert-warning" role="alert" v-show="showWarning">チェックボックスを確認してください</div>
    <b>結果</b> {{formula}} = {{amount}}
  </div>
</template>

<script>
import currencyFormatter from 'currency-formatter';

export default {
  data() {
    return {
      basicFee: 8750,
      expressFee: 4870,
      buyTwoWayTicket: true,
      useTwoWayDiscount: false,
      useStudentDiscount: false,
    };
  },
  watch: {
    buyTwoWayTicket() {
      if (this.buyTwoWayTicket === false) {
        this.useTwoWayDiscount = false;
      }
    },
  },
  computed: {
    showWarning() {
      return true;
    },
    formula() {
      return '1 + 2';
    },
    amount() {
      return currencyFormatter.format(114514, { locale: 'ja-JP' });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
}
</style>
