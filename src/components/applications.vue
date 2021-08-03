<template>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <img :src="app.img" :alt="app.name" class="rounded pill h-25 w-25">
      </div>
      <div class="card-footer">
        <h5>{{ app.name }}</h5>
        <p>description here</p>
        <i>{{ app.type }}</i>
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

<style>

</style>
