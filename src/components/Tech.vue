<template>
  <div class="col-2">
    <img :src="tech.img" :alt="tech.name" class="h-50 w-50">
  </div>
</template>

<script>
export default {
  props: { tech: { type: Object, required: true } },
  setup(props) {
    return {}
  }
}
</script>

<style>

</style>
