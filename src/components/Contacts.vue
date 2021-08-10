<template>
  <div class="col-2">
    <button class="btn btn-dark rounded-circle site text w-75">
      <i :class="contact.logo"></i>
    </button>
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
  font-size: 5rem;
}
.site{
  transition: all .2s ease-in-out;
}
.site:hover{
  transform: scale(1.1);
  box-shadow: 10px 10px 10px  0 rgba(14, 12, 12, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
</style>
