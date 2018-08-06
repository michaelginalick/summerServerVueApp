<template>
  <div v-if="this.event.Location">
    <p> Location: {{ event.Location }} </p>
  </div>
  <div v-else>
    <p> Location: No location was provided</p>
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



