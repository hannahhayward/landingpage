<template>
  <div class="container-fluid bg d-none">
    <div class="row">
      <video autoplay muted id="entryVideo" class="h-100 w-100">
        <source src="landing page intro_Trim.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="container-fluid ">
    <div class="row d-flex justify-content-center ">
      <div class="col-2 "></div>
      <div class="col-8 text-center">
        <img src="../assets/img/bluelogopng.png" alt="logo" class="logo fade-in-image text-center">
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row about">
      <div class="col-11 m-auto py-5">
        <AboutMe />
      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <Tech />
      </div>
    </div>
    <div class="row portfolio">
      <div class="col-11 m-auto py-5">
        <Portfolio />
      </div>
    </div>
    <div class="row contacts d-flex justify-content-around">
      <Contacts />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      contacts: AppState.contacts,
      technology: AppState.technologies
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.fade-in-image {
  animation: fadeIn 10s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
  .bg {
    background-color: black;
  }
  .logo{
    height: 39rem;
    object-fit: contain;  }
  .logo-fade {
    background-color: #ffffff;
  }

</style>
