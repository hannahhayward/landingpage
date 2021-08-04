<template>
  <div class="col-6">
    <div class="card">
      <div class="card-body">
        <img :src="collab.img" alt="collabPic">
      </div>
      <card class="footer">
        <h5>{{ collab.name }}</h5>
        <p>description</p>
        <i>{{ collab.type }}</i>
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

</style>
