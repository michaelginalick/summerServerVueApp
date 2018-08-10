<template>
  <div v-if="this.event.Location">
    <p> {{ event.Location }} </p>
  </div>
  <div v-else>
    <p>  No location was provided</p>
  </div>
</template>

<script>
export default {
  name: "eventLocation",

  props: {
    event: {
      Object,
      required: true
    }
  }
}
</script>



