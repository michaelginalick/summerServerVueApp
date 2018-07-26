<template>
  <i :class="cssClass" 
    @click="method"
  >
  </i>
</template>


<script>
export default {
  name: "arrow",

  props: {
    cssClass: {
      String,
      required: true
    },

    method: {
      Function,
      required: true
    }
  }
};
</script>

<style scoped>
</style>

