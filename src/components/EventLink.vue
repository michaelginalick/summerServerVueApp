<template>
  <div v-if="event.Link">
    <p> <a :href="`${event.Link}`"> {{ event.Link }}</a></p>
  </div>
  <div v-else>
    <p> No link was provided</p>
  </div>
</template>

<script>
export default {
  name: "eventLink",

  props: {
    event: {
      Object,
      required: true
    }
  }
};
</script>

<style>
</style>


