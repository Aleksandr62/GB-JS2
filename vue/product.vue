<template>
  <div class="card">
    <div class="card__img">
      <img class="card__photo" src="productsList.img" alt="card " />
      <div class="card__select">
        <a class="card__select__link" href="productsList.href">
          <img
            class="card__select__img"
            src="img/cart.svg"
            alt="add_cart"
          />Add to Cart</a
        >
      </div>
    </div>
    <a class="card__heading" href="# ">{{productsList.product_name}}</a>
    <p class="card__p">{{productsList.description}}</p>
    <p class="card__price">$ {{productsList.price}}</p>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      productsList: [],
      filtered: [],
    };
  },
};
</script>

<style lang="sass" scoped>
.card
    width: 360px
    margin: 15px 15px
    background: $backGroundCard
    padding-bottom: 20px
    &__img
        position: relative
        cursor: pointer
        &:hover>.card__select
            transform: scaleX(1)
            transition: 0.5s
    &__photo
        width: 100%
    &__select
        background: rgba(58, 56, 56, 0.86)
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        transform: scaleX(0)
        align-items: center
        justify-content: center
        &__link
            padding: 10px 18px
            font-size: 14px
            line-height: 17px
            border: 1px solid $colorTextp
            color: $colorTextp
            display: flex
            align-items: center
            &:hover
                box-shadow: 0 0 5px white
        &__img
            width: 26px
            height: 24px
            margin-right: 10px
    &__heading
        display: flex
        margin-top: 24px
        margin-left: 18px
        font-size: 13px
        line-height: 16px
    &__p
        margin-top: 12px
        margin-left: 16px
        margin-right: 28px
        font-weight: 300
        font-size: 14px
        line-height: 17px
    &__price
        margin-top: 18px
        margin-left: 18px
        font-size: 16px
        line-height: 19px
        color: $colorSelect
    &:hover
        transition: 0.5s
        transform: scale(1.01)
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.21)
</style>