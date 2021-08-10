<template>
  <div class="row py-5">
    <div class="col-10 m-auto portfolio text-center">
      <h3>Some of my Favorites</h3>
    </div>
  </div>
  <div class="row py-2">
    <Applications />
  </div>
  <div class="row py-5">
    <div class="col-10 m-auto">
      <h5 class="text-center">
        Collaborations
      </h5>
    </div>
  </div>
  <div class="row py-2">
    <Collabs />
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      apps: AppState.projects,
      collabs: AppState.collaborations
    }
  }

}
</script>

<style>

</style>
