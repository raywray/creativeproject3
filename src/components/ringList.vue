<template>
<div class="wrapper">
  <div class="rings">
    <div class="ring" v-for="ring in rings" :key="ring.id">
      <div class="info">
        <h1>{{ring.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+ring.image">
      </div>
      <div class="price">
        <p>{{ring.price}}</p>
        <button v-on:click="cartPush(ring)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'RingList',
  props: {
    rings: Array
  },
  methods: {
    cartPush(item) {
      this.$root.$data.cart.push(item);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rings {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}

.ring {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  padding: 20px;
}

.ring img {
  height: 200px;
  width: 200px;
}

.ring .image {
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
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
}

.auto {
  margin-left: auto;
}

</style>
