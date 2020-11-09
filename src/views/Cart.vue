<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-if="!cart.length"><h3>Your cart is empty</h3>
      <div id='ContShop'>
        <router-link to='/home'>
          <p>Continue Shopping</p>
        </router-link>
      </div>
    </div>
    <div class="product" v-for="product in cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <p>{{product.price}}</p>
        <button v-on:click="deleteItem(product)" class="auto">Remove from Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
    deleteItem(item) {
      this.$root.$data.cart.splice(item, 1);
    }
  }
}
</script>

<style scoped>
#ContShop {
  text-align: center;
  background-color: black;
  padding: 3px;
  font-weight: normal;
  border-radius: 25px;
}
#ContShop p {
  color: white;
}
h3 {
  font-size: 20px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  padding: 20px;
}

.product img {
  height: 200px;
  width: 200px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  padding: 10px;
  height: 70px;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  margin-top: 10px;
  height: 35px;
  background: #000;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
}

.auto {
  margin-left: auto;
}
</style>
