<template>
<div id="app">
  <body>
    <div class='top-bar-container'>
      <div class='top-bar'>STORES NOW OPEN WITH NEW SAFETY MEASURES</div>
    </div>
    </body>

    <div id="menu">
      <div id="side">
        <router-link to='/cart'>
          <div class="menu-item">
            <p>{{itemCount}} Items<img src="/images/cart.webp"></p>
          </div>
        </router-link>
        <router-link to='/home'>
          <div class="menu-item">
          <p>Home <img src="/images/home.png"></p>
        </div>
      </router-link>
      </div>
    </div>

    <div class='title-container'>
      <div class='title'><h1>JØRGENSEN</h1>JEWLERS</div>
    </div>

    <div class='selection-bar-container'>
      <div class='selection-bar'>
        <router-link to='/rings'>
          <div class='selection'>RINGS</div>
        </router-link>
        <router-link to='/watches'>
          <div class='selection'>WATCHES</div>
        </router-link>
        <router-link to='/earrings'>
          <div class='selection'>EARRINGS</div>
        </router-link>
      </div>
    </div>


  <router-view />
  <div class='clear'></div>
  <div class='footer-container'>
    <div class='footer'><a href="https://github.com/raywray/creativeproject3.git"><u>GitHub</u></a></div>
  </div>
</div>

</template>

<script>
export default {
  name: 'App',
  computed: {
    itemCount() {
      return this.$root.$data.cart.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  font-family: 'Raleway', sans-serif;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: black;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 25px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right: solid black 1px;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer-container {
  display: flex;
  justify-content: flex-end;
}

.footer {
  height: 50px;
  flex: 1;
  text-align: center;
  font-size: 15px;

}

.clear {
  clear: both;
}

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.top-bar-container {
  height: 40px;
  width: 100%;
  background-color: #000000;
}

.top-bar {
  color: #ffffff;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  padding: 10px;
  font-family: 'Raleway', sans-serif;
}

.header-container {
  height: 50px;
  width: 100%;
}

.header {
  width: 100%;

  float: left;
}

.title-container {
  height: 150px;
  width: 100%;
}

.title {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding: 0px;
  /*border: 1px solid #e80000;/*red*/
  font-size: 20px;
  height: auto;
}

h1 {
  font-size: 50px
}

.selection-bar-container {
  height: 50px;
  width: 100;
  background-color: #f0f0f0;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.selection-bar {
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

.selection  {
  width: 400px;
  height: auto;
  font-family: 'Peddana', serif;
  font-size: 20px;
  color: dark green;
}

a:link,
a:visited {
  color: #5D6063;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
