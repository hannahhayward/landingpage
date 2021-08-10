<template>
  <!-- <div class="col-3 text-center">
    <img :src="tech.img" :alt="tech.name" class="h-50 w-50">
  </div> -->
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="../assets/img/.net.png" height="100" width="250" alt="dotnet" />
      </div>
      <div class="slide">
        <img src="../assets/img/bootstrap.jpg" height="100" width="250" alt="boot" />
      </div>
      <div class="slide">
        <img src="../assets/img/csharp.png" height="100" width="250" alt="csharp" />
      </div>
      <div class="slide">
        <img src="../assets/img/css.png" height="100" width="250" alt="css" />
      </div>
      <div class="slide">
        <img src="../assets/img/html.png" height="100" width="250" alt="html" />
      </div>
      <div class="slide">
        <img src="../assets/img/js.jpg" height="100" width="250" alt="js" />
      </div>
      <div class="slide">
        <img src="../assets/img/mongo.png" height="100" width="250" alt="mongo" />
      </div>
      <div class="slide">
        <img src="../assets/img/node.png" height="100" width="250" alt="node" />
      </div>
      <div class="slide">
        <img src="../assets/img/sql.jpg" height="100" width="250" alt="sql" />
      </div>
      <div class="slide">
        <img src="../assets/img/vue.png" height="100" width="250" alt="vue" />
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
100% { transform: translateX(calc(-250px * 7))}
}

// Styling
.slider {
background: white;
box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
height: 100px;
margin: auto;
overflow:hidden;
position: relative;
width: 960px;

&::before,
&::after {
@include white-gradient;
content: "";
height: 100px;
position: absolute;
width: 200px;
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
width: calc(250px * 14);
}

.slide {
height: 100px;
width: 250px;
}
}
</style>
