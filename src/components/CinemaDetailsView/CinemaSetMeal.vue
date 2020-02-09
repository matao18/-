<template>
  <div>
    <van-card
      :price="item.price.toFixed(2)"
      :title="item.title"
      :thumb="item.imageUrl.replace(/\/w.h/, '')"
    >
      <div slot="tags" class="pay">
        <div plain type="danger">{{ item.curNumberDesc }}</div>
        <van-button type="danger" size="mini" color="#F03D37"
          >去购买</van-button
        >
      </div>
    </van-card>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";

Vue.use(Card);
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.pay {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
}

.van-card {
  font-size: 0.375rem;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.van-button--mini {
  margin-top: 0.1563rem;
}

.van-card__price {
  color: #f03d37;
  font-size: 0.375rem;
}

.van-card__title {
  font-size: 0.5rem;
  line-height: normal;
  overflow: inherit;
}

.van-button {
  border-radius: 4px;
}
</style>
