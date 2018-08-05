<template>
  <div>
    {{ this.mapEventName }}
  </div>
</template>



<script>


export default {
  name: "eventsInDay",

  props: {
    day: {
      Object,
      required: true
    }
  },

  computed: {
    mapEventName() {
      if (this.day && this.day.events) {
        return this.day.events.map(e => e.Name)
      } else {
        {}
      }
    }
  }

};
</script>


<style scoped>
</style>


