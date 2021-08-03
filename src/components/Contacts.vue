<template>
  <div class="col-2">
    <i :class="contact.logo"></i>
    is this showing up
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

<style>

</style>
