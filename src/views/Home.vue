<template>
<div>
  <div class='promo-container'>
    <div class='promo'>SAVE UP TO <div class='percent'>30%*</div> ON SELECT BRIDAL STOREWARE</div>
    <div class='promo-img'><img class='PROMOimg' src='images/promoimg.jpg'/></div>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  margin-top: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.promo-container {
  height: 500px;
  width: 100%;
  float: left;
  padding: 20px;
  /*border: 1px solid #8a13f2; /*purple*/
  margin-bottom: 50px;
}

.promo {
  float: left;
  width: 50%;
  font-size: 50px;
  font-family: 'Peddana', serif;
  height: 100%;
  text-align: center;
  word-wrap: break-word;
  /*border: 1px solid #fbff08; /*yellow*/
}

.percent {
  font-size: 150px;
}

.promo-img {
  float: left;
  position: relative;
}

.PROMOimg {
  height: 500px;
  width: auto;
}
</style>
