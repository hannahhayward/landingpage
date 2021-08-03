<template>
  <div class="card">
    <div class="card-body">
      <img :src="c.image" alt="collabPic">
    </div>
    <card class="footer">
      <h5>{{ c.name }}</h5>
      <p>description</p>
      <i>{{ c.type }}</i>
    </card>
  </div>
</template>

<script>
export default {
  props: { c: { type: Object, required: true } },
  setup(props) {
    return {}
  }
}
</script>

<style>

</style>
