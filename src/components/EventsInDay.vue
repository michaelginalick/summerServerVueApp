<template>
  <div>
    <eventModal 
      :showModal="showModal"
      :event="selectedEvent"
      @toogleModal="deselect()"
    />
    <ul v-for="event in this.mapEvents" v-bind:key="event.Name" >
      <li>
        <a href="#"
          @click="selectEvent(event)"
        >{{ event.Name }} 
        </a>
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
      showModal: false,
      selectedEvent: { 
        Name: undefined, 
        Link: undefined, 
        Location: undefined 
      }
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
    selectEvent(e) {
      this.selectedEvent = e
      this.showModal = !this.showModal
    },

    deselect() {
      this.showModal = !this.showModal
      this.resetEvent()
    },

    resetEvent() {
      this.selectedEvent = { Name: undefined, Link: undefined, Location: undefined }
    }
  }

};
</script>


<style scoped>
</style>


