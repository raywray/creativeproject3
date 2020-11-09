<template>
<div class="wrapper">
  <div class="watches">
    <div class="watch" v-for="watch in watches" :key="watch.id">
      <div class="info">
        <h1>{{watch.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/watches/'+watch.image">
      </div>
      <div class="price">
        <p>{{watch.price}}</p>
        <button v-on:click="cartPush(watch)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'WatchList',
  props: {
    watches: Array
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

.watches {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}

.watch {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  padding: 20px;
}

.watch img {
  height: 200px;
  width: 200px;
}

.watch .image {
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
