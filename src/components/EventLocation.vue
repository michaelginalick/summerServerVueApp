<template>
  <div v-if="this.event.Location">
    <li> Location: {{ event.Location }} </li>
  </div>
  <div v-else>
    <li> Location: No location was provided</li>
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



