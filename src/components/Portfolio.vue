<template>
  <div class="row">
    <div class="col-10 m-auto portfolio text-center">
      <h3>Some of my Favorites</h3>
    </div>
    <div class="row">
      <Applications v-for="a in apps" :key="a.name" :app="a" />
    </div>
    <div class="row">
      <Collabs v-for="c in collabs" :key="c.name" :collab="c" />
    </div>
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
