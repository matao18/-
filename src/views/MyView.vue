<template>
  <div>
    <!-- 顶部 复用home组件 -->
    <HeaderTop />
    <!-- 头像 -->
    <div class="my-avatar">
      <div class="avatar-img">
        <img src="/image/avatar.png" alt />
      </div>
    </div>
    <!-- 订单 -->
    <div class="my-order">
      <div class="top">我的订单</div>
      <div class="straight"></div>
      <ul>
        <li class="movie">电影</li>
        <li class="shop">商城</li>
      </ul>
    </div>
    <!-- 优惠/折扣卡 -->
    <div class="my-discounts">
      <div>
        <a href>优惠卷</a>
        <van-icon name="arrow" />
      </div>
      <div>
        <a href>折扣卡</a>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    HeaderTop: () => import("../components/HomeView/HeaderTop")
  }
};
</script>

<style lang="scss" scoped>
.my-avatar {
  height: 4.6875rem;
  background: url("/image/bg.png") no-repeat;
  background-size: 100% 100%;

  .avatar-img {
    width: 2.0625rem;
    height: 2.0625rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);

    > img {
      width: 120%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
    }
  }
}

.my-order {
  width: 100%;
  border-top: 0.4188rem solid #f3f3f3;
  position: relative;

  > .top {
    text-align: center;
    font-size: 0.5rem;
    width: 2.5rem;
    margin: 0 auto;
    margin-top: 0.4688rem;
    z-index: 2;
    position: relative;
    background: #fff;
  }

  .straight {
    width: 6.25rem;
    height: 1px;
    background: #f3f3f3;
    position: absolute;
    left: 50%;
    top: 0.7188rem;
    transform: translate(-50%, 0);
  }

  > ul {
    display: flex;

    > li {
      flex: 1;
      text-align: center;
      height: 3.5938rem;
      line-height: 5.9375rem;
      font-size: 0.4688rem;

      &:nth-of-type(1) {
        background: url("/image/movie.png") no-repeat center 0.7813rem;
        background-size: 1.5625rem;
      }

      &:nth-of-type(2) {
        background: url("/image/shop.png") no-repeat center 0.7813rem;
        background-size: 1.5625rem;
      }
    }
  }
}

.my-discounts {
  border-top: 0.4688rem solid #f3f3f3;

  > div {
    height: 1.375rem;
    border-bottom: 1px solid #f3f3f3;
    line-height: 1.375rem;
    display: flex;

    > a {
      width: 100%;
      padding-left: 0.7813rem;
      font-size: 0.4375rem;
      color: #000;
    }

    > i {
      line-height: 1.375rem;
      padding-right: 0.4688rem;
    }
  }
}
</style>
