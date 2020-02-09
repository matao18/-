<template>
  <div>
    <section class="top-bar">
      <router-link class="city" to="/city">
        {{ city }}
        <van-icon name="arrow-down" size="0.375rem" />
      </router-link>
      <ul class="switch-hot">
        <li :class="{ con: current == 0 }" @click="$emit('red')">正在热映</li>
        <li :class="{ con: current == 1 }" @click="$emit('add')">即将上映</li>
      </ul>
      <router-link class="search" to="/search">
        <van-icon name="search" />
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    city: {
      type: String
    },
    current: {
      type: Number,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.top-bar {
  font-size: 0.4375rem;
  font-weight: 600;
  height: 1.375rem;
  line-height: 1.375rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  width: 100%;

  .switch-hot {
    flex: 1;
    text-align: center;
    display: flex;

    > li {
      flex: 1;
      margin: 0 0.4688rem;
      border-bottom: 2px solid transparent;
    }

    > li.con {
      border-bottom: 0.0625rem solid #ef4238;
      color: #ef4238;
    }
  }

  .city {
    padding-left: 0.4688rem;
    color: #000;
    font-weight: 100;

    > i {
      vertical-align: middle;
    }
  }

  .search {
    padding-right: 0.4688rem;
    font-size: 0.75rem;
    color: #ef4238;
  }
}
</style>
