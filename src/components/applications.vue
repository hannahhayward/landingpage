<template>
  <div class="col-10 m-auto py-3 ">
    <div class="card app mb-3">
      <div class="row no-gutters">
        <div class="col-md-8 text-left keeper">
          <img src="../assets/img/keeper.jfif" alt="keeper" class="keeper">
        </div>
        <div class="col-md-4">
          <div class="card-body text-right">
            <h5 class="card-title">
              Keeper
            </h5>
            <p class="card-text">
              A full stack social networking platform
            </p>
            <p class="card-text">
              <small class="text-muted">HTML5, CSS, Vue3, Bootstrap, JavaScript ES6, C#, MySQL and .NET</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-10 m-auto py-3 ">
    <div class="card app mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">
              The Network
            </h5>
            <p class="card-text">
              A full stack social networking platform
            </p>
            <p class="card-text">
              <small class="text-muted">HTML5, JavaScript ES6, Vue3, CSS, Node.js, Bootstrap, MongoDB and .NET</small>
            </p>
          </div>
        </div>
        <div class="col-md-8 text-right">
          <img src="../assets/img/network.png" alt="" class="network">
        </div>
      </div>
    </div>
  </div>
  <div class="col-10 m-auto py-3 ">
    <div class="card app mb-3">
      <div class="row no-gutters">
        <div class="col-md-8 text-left">
          <img src="../assets/img/buglog.png" class="bug" alt="">
        </div>
        <div class="col-md-4 ">
          <div class="card-body text-right">
            <h5 class="card-title">
              Bug Log
            </h5>
            <p class="card-text">
              A full stack forum application to solve and track software bugs.
            </p>
            <p class="card-text">
              <small class="text-muted">HTML5, JavaScript ES6, CSS, Vue3, Node.js, MongoDB, Bootstrap and .NET</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      apps: AppState.projects
    }
  }
}
</script>

<style scoped>
.app{
  transition: all .2s ease-in-out;
}
.keeper{
  height: 20rem;
  width: 26rem;
}
.network{
  height: 20rem;
  width: 30rem;
}
.bug{
  height: 20rem;
  width: 30rem;
}
.app:hover{
  transform: scale(1.1);
  box-shadow: 10px 10px 10px  0 rgba(14, 12, 12, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
</style>
