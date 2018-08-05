<template>
  <div>
    <ul v-for="event in this.mapEventName" v-bind:key="event.id" >
      <li>
        <a href="#">{{ event.Name }} </a>
      </li>
    </ul>
  </div>
</template>



<script>
import { removeDuplicates } from "../modules/removeDuplicates"

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
        let getUniqueEvents = this.day.events.removeDuplicates(this.day.events, "Name")
        return getUniqueEvents.map(e => e)
      } else {
        {}
      }
    }
  },

};
</script>


<style scoped>
</style>


