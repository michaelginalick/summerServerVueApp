<template>
  <div class="eventWrapper">
    <eventModal 
      :showModal="showModal"
      :event="selectedEvent"
      @toogleModal="deselect()"
    />
      <div class="eventInDay">
        <noEventsInDay 
          :day="this.day"
          :nextMonth="this.nextMonth"
        />
        <div class="events">
          <div class="event" v-for="event in this.mapEvents" 
              v-bind:key="event.Name"
          >
            <a href="#" @click="selectEvent(event)">{{ event.Name }} </a>
          </div>
      </div>
    </div>
  </div>
</template>



<script>
import { removeDuplicates } from "../modules/removeDuplicates";
import EventModal from "./EventModal.vue";
import NoEventsInDay from './NoEventsInDay.vue';

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
    eventModal: EventModal,
    noEventsInDay: NoEventsInDay
  },

  props: {
    day: {
      Object,
      required: true
    },

    nextMonth: {
      Boolean,
      required: true
    }
  },

  computed: {
    mapEvents() {
      if (this.day && this.day.events) {
        let getUniqueEvents = this.day.events.removeDuplicates(this.day.events, "Name")
        return getUniqueEvents
      } else {
        return {}
      }
    }
  },

  methods: {
    selectEvent(e) {
      this.resetEvent()
      this.selectedEvent = e
      this.showModal = !this.showModal
    },

    deselect() {
      this.showModal = !this.showModal
    },

    resetEvent() {
      this.selectedEvent = { Name: undefined, Link: undefined, Location: undefined }
    }
  }

};
</script>


<style scoped>
.eventWrapper {
  height: 100px;
  overflow-y:auto;
  margin-left: 5%;
  padding-right: 5%;
}

.event {
  margin-bottom: 10px;
  overflow-wrap: break-word;
  margin-right: 10px;
  text-align: center;
}
.eventInDay {
  width: 100%;
  display: table;
  table-layout: fixed; /* optional, for equal spacing */
  border-collapse: collapse;
  word-break: break-word;
}

.eventListing {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  margin: 0;
  font-size: 1.5em;
}

</style>


