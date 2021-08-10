<template>
  <div class="col-4 py-3 ">
    <div class="card bg-dark app">
      <div class="card-body text-center">
        <img :src="app.img" :alt="app.name" class="rounded pill h-50 w-50">
      </div>
      <div class="card-footer text-center">
        <h5>{{ app.name }}</h5>
        <p>{{ app.description }}</p>
        <i>{{ app.type }}</i>
        <p><i>{{ app.tech }}</i></p>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  props: { app: { type: Object, required: true } },
  setup(props) {
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
.app:hover{
  transform: scale(1.1);
  box-shadow: 10px 10px 10px  0 rgba(14, 12, 12, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
</style>
