<template>
  <div class="items bg-dark">
    <div id="item" class="item active">
      <img src="http://via.placeholder.com/500x500">
    </div>
    <div id="item" class="item next">
      <img src="http://via.placeholder.com/500x500">
    </div>
    <div id="item" class="item">
      <img src="http://via.placeholder.com/500x500">
    </div>
    <div id="item" class="item">
      <img src="http://via.placeholder.com/500x500">
    </div>
    <div id="item" class="item prev">
      <img src="http://via.placeholder.com/500x500">
    </div>
    <div class="button-container">
      <div class="button" @click="gotoNext()">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="button" @click="gotoNext()">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { gotoNext, gotoPrev, gotoNum } from '../state'
export default {
  setup() {
    return {
      gotoNext,
      gotoPrev,
      gotoNum,
      slides: document.querySelectorAll('.item'),
      button: document.querySelectorAll('.button')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
}

.items .item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  z-index: -1;
  opacity: 0;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item.active {
  opacity: 1;
  z-index: 99;
  box-shadow: 0px 0px 105px -35px rgba(0, 0, 0, 0.75);
}

.item.prev {
  z-index: 2;
  opacity: 0.25;
  transform: translate(-125%, -50%);
}

.item.next {
  z-index: 2;
  opacity: 0.25;
  transform: translate(25%, -50%);
}

.items .button-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 275px;
  z-index: 100;
}

.button-container .button {
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  position: relative;
  opacity: 0.75;
  transition: all 300ms ease-in-out;
}

.button-container .button:hover {
  opacity: 1;
}

.button-container .button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  z-index: -99;
}

.button-container .button:nth-child(1) {
  float: left;
}

.button-container .button:nth-child(2) {
  float: right;
}
</style>
