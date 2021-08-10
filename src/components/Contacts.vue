<template>
  <div class="col-2">
    <p class="text">
      <i :class="contact.logo"></i>
    </p>
  </div>
</template>

<script>
export default {
  props: { contact: { type: Object, required: true } },
  setup(props) {
    return {}
  }
}
</script>

<style scoped>
.text{
  font-size: 10rem;
}
</style>
