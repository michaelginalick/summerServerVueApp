<template>
  <div>
    <ul v-for="event in this.mapEvents" v-bind:key="event.Name" >
      <li>
        <a href="#"
          @click="toogleModal()"
        >{{ event.Name }} 
        </a>
        <eventModal 
          :showModal="showModal"
          :event="event"
          @toogleModal="toogleModal()"
        />
      </li>
    </ul>
  </div>
</template>



<script>
import { removeDuplicates } from "../modules/removeDuplicates";
import EventModal from "./EventModal.vue";

export default {
  name: "eventsInDay",


  data() {
    return {
      showModal: false
    }
  },

  components: {
    eventModal: EventModal
  },

  props: {
    day: {
      Object,
      required: true
    },
  },

  computed: {
    mapEvents() {
      if (this.day && this.day.events) {
        let getUniqueEvents = this.day.events.removeDuplicates(this.day.events, "Name")
        return getUniqueEvents
      } else {
        {}
      }
    }
  },

  methods: {
    toogleModal() {
      this.showModal = !this.showModal
    }
  }

};
</script>


<style scoped>
</style>


