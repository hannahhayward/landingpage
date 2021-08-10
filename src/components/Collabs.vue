<template>
  <div class="col-10 m-auto py-3 ">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-8 text-center ">
          <img src="../assets/img/hogout.png" class="hog" alt="">
        </div>
        <div class="col-md-4">
          <div class="card-body text-right">
            <h5 class="card-title">
              Hogout
            </h5>
            <p class="card-text">
              Collaborated with a team of four to develop a full stack social networking platform.
            </p>
            <p class="card-text">
              <small class="text-muted">JavaScript ES6, Vue3, CSS, HTML5, Bootstrap, MongoDB, Node.js and .NET</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-10 m-auto py-3 ">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <div class="card-body text-right">
            <h5 class="card-title">
              KanBan
            </h5>
            <p class="card-text">
              Collaborated with a partner developer to develop a full stack KanBan board application.
            </p>
            <p class="card-text">
              <small class="text-muted">JavaScript ES6, JavaScript ES6, Vue3, CSS, HTML5, Bootstrap, MongoDB, Node.js and .NET</small>
            </p>
          </div>
        </div>
        <div class="col-md-8 kan">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { collab: { type: Object, required: true } },
  setup(props) {
    return {}
  }
}
</script>

<style>
.app{
  transition: all .2s ease-in-out;
}
.hog{
 height: 20rem;
 width: 38rem;
}
.kan{
  background-image: url("../assets/img/kanban.png");
  height: 31rem;
  width: 27rem;
  object-fit: cover;
  background-repeat: no-repeat;
}
.app:hover{
  transform: scale(1.1);
  box-shadow: 10px 10px 10px  0 rgba(14, 12, 12, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
</style>
