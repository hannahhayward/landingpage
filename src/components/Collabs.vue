<template>
  <div class="col-6 py-3">
    <div class="card bg-dark app">
      <div class="card-body text-center">
        <img :src="collab.img" alt="collabPic" class="h-50 w-50">
      </div>
      <card class="footer text-center">
        <h5>{{ collab.name }}</h5>
        <p>{{ collab.description }}</p>
        <i>{{ collab.type }}</i>
        <p><i>{{ collab.tech }}</i></p>
      </card>
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
.app:hover{
  transform: scale(1.1);
  box-shadow: 10px 10px 10px  0 rgba(14, 12, 12, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
</style>
