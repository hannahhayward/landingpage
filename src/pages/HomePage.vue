<template>
  <div class="container-fluid bg d-none">
    <div class="row">
      <video autoplay muted id="entryVideo" class="h-100 w-100">
        <source src="landing page intro_Trim.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row logo-fade d-flex justify-content-center">
      <div class="col-2"></div>
      <div class="col-11 m-auto ">
        <img src="../assets/img/black_logo_sml.jpeg" alt="logo" class="logo">
      </div>
    </div>
    <div class="row about">
      <div class="col-11 m-auto py-5">
        <AboutMe />
      </div>
    </div>
    <div class="row">
      <Tech />
    </div>
    <div class="row portfolio">
      <div class="col-11 m-auto py-5">
        <Portfolio />
      </div>
    </div>
    <div class="row contacts d-flex justify-content-around">
      <Contacts v-for="c in contacts" :key="c.name" :contact="c" />
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
  .bg {
    background-color: #010001;
  }
  .logo{
    height: 34rem;
    width: 81rem;
object-fit: none;  }
  .logo-fade {
    background-color: #ffffff;
  }

</style>
