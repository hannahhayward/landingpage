<template>
  <div class="slider">
    <div class="slide-track mt-3">
      <div class="slide col-1 mt-3 ">
        <img class="d-flex align-items-center img" src="../assets/img/.net.png" alt="dotnet" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/bootstrap.jpg" alt="boot" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/csharp.png" alt="csharp" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/css.png" alt="css" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/html.png" alt="html" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/js.jpg" alt="js" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/mongo.png" alt="mongo" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/node.png" alt="node" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/sql.jpg" alt="sql" />
      </div>
      <div class="slide col-1 mt-3">
        <img class="d-flex align-items-center img" src="../assets/img/vue.png" alt="vue" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  props: { tech: { type: Object, required: true } },
  setup(props) {
    return { technologies: AppState.technologies }
  }
}
</script>

<style lang="scss" scoped>
.img{
  height: 10rem;
  width: 10rem;
}
body {
align-items: center;
background: #E3E3E3;
display: flex;
height: 100vh;
justify-content: center;
}

@mixin white-gradient {
background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
0% { transform: translateX(0); }
100% { transform: translateX(calc(-10rem * 7))}
}

// Styling
.slider {
background: white;
box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
height: 15rem;
margin: auto;
overflow:hidden;
position: relative;
width: 76rem;

&::before,
&::after {
@include white-gradient;
content: "";
height: 15rem;
position: absolute;
width: 0rem;
z-index: 2;
}

&::after {
right: 0;
top: 0;
transform: rotateZ(180deg);
}

&::before {
left: 0;
top: 0;
}

.slide-track {
animation: scroll $animationSpeed linear infinite;
display: flex;
width: calc(10rem * 14);
}

.slide {
height: 15rem;
width: 10rem;
}
}
</style>
