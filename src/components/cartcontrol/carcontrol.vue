<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart () {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCart () {
        if (!event._constructed) {
          return;
        }
        this.food.count--;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    .cart-decrease
      display inline-block
      padding 6px
      &.fade-enter-active, &.fade-leave-active
        transition all 0.5s linear
      &.fade-enter, &.fade-leave-active
        transform translate3D(24px, 0, 0) rotate(180deg)
        opacity 0
      .inner
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
    .cart-count
      display inline-block
      vertical-align top
      line-height 24px
      padding-top 6px
      width 12px
      font-size 10px
      font-weight 700
    .cart-add
      display inline-block
      padding 6px 7px 7px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
</style>
